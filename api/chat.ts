import type { IncomingMessage, ServerResponse } from 'http';
import { knowledgeBase } from '../src/data/knowledgeBase';

const LANGUAGE_NAMES: Record<string, string> = {
  en: 'English',
  pt: 'Brazilian Portuguese',
  it: 'Italian',
};

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => { data += chunk; });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  let body: { message?: string; language?: string };
  try {
    const raw = await readBody(req);
    body = JSON.parse(raw) as typeof body;
  } catch {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'Invalid JSON' }));
    return;
  }

  const { message, language = 'en' } = body;

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'Message is required' }));
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'Server configuration error' }));
    return;
  }

  const languageName = LANGUAGE_NAMES[language ?? 'en'] ?? 'English';

  const systemInstruction = `You are an AI assistant embedded in Wanderson Oliveira's personal portfolio website.
Your ONLY job is to answer questions about Wanderson based on the information provided below.
Rules:
- Always respond in ${languageName}.
- Keep answers concise, natural, and professional (2-4 sentences max unless detail is requested).
- Only use facts from the knowledge base below. Do not invent or assume any information.
- If you don't know the answer based on the knowledge base, say so honestly.
- Do not answer questions unrelated to Wanderson or his professional profile.
- When sharing URLs or links, include them as plain text.

KNOWLEDGE BASE:
${knowledgeBase}`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`;

  const geminiBody = {
    system_instruction: {
      parts: [{ text: systemInstruction }],
    },
    contents: [
      {
        role: 'user',
        parts: [{ text: message.trim() }],
      },
    ],
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 512,
    },
  };

  let geminiRes: Response;
  try {
    geminiRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiBody),
    });
  } catch {
    res.statusCode = 502;
    res.end(JSON.stringify({ error: 'Failed to reach AI service' }));
    return;
  }

  if (!geminiRes.ok) {
    res.statusCode = 502;
    res.end(JSON.stringify({ error: 'AI service returned an error' }));
    return;
  }

  const data = await geminiRes.json() as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };

  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

  if (!reply) {
    res.statusCode = 502;
    res.end(JSON.stringify({ error: 'Empty response from AI service' }));
    return;
  }

  res.statusCode = 200;
  res.end(JSON.stringify({ reply }));
}
