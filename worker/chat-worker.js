// Gerado de api/chat.ts (veja worker/entry.ts). Cole este arquivo inteiro no editor do Cloudflare Worker.

// ../api/chat.ts
var LANGUAGE_NAMES = {
  en: "English",
  pt: "Brazilian Portuguese",
  it: "Italian"
};
var knowledgeBase = `
# Wanderson Oliveira \u2014 Portfolio Knowledge Base

## Personal Profile
- Full name: Wanderson Oliveira
- Role: Full Stack Software Engineer
- Experience: 8+ years (professional career started July 2018)
- Current location: Italy
- Languages: Portuguese (native), English (Intermediate-Advanced, B2), Italian (Basic, A2)

## Bio
Full Stack Software Engineer with 8+ years of experience building scalable web applications, automation platforms, and cloud-based solutions. Specialized in React, Next.js, Python, and modern backend architectures, across frontend, backend, DevOps, and Google Cloud Platform. Delivered high-impact automation systems, AI-powered applications, and enterprise solutions that improved operational efficiency and reduced manual processes. Passionate about software architecture, automation, and AI-driven innovation.

## Work Experience

### Contabilizei (February 2026 \u2013 Present)
- Position: Mid-Level Software Developer
- Location: Curitiba, PR, Brazil (remote)
- Responsibilities: Develops and maintains 21+ automation bots for the company registration (CNPJ) process, using Playwright to interact with government portals (data entry, document retrieval, validation) and Python, FastAPI, and Flask to orchestrate the workflows. Built scalable, event-driven services on Google Cloud Platform (Cloud Run, Cloud Scheduler, Pub/Sub), reducing manual effort, accelerating customer onboarding, and improving automation reliability, monitoring, and error recovery.

### Sidia Instituto de Ci\xEAncia e Tecnologia \u2014 Samsung R&D institute (July 2022 \u2013 February 2026)
- Position: Mid-Level Software Developer
- Location: Manaus, AM, Brazil
- Project 1 \u2014 Binary code feature validation for pre-release Samsung devices (Latin America): built automated validation of features directly in the binary before it is applied to physical devices, enabling early detection of regressions. Reduced validation time from 2\u20133 days to approximately 10 minutes.
- Project 2 \u2014 AI chatbot for Sidia internal context: intelligent chatbot using AI and NLP over sensitive internal documents, built with LangChain and the LLaMA model, with Qdrant as vector database for semantic retrieval and custom prompts returning answers with direct document references.
- Project 3 \u2014 Tech Lead, Android Sample Manager for remote testing: led a legacy project managing Android device samples on a remote test farm. Gathered client requirements, managed backlog and delivery schedule, coordinated task distribution across the development team, and maintained constant client communication.
- Technologies: Next.js, TypeScript, Python, LangChain, LLaMA, Qdrant, LLM, Docker

### Kodigos Software LTDA (May 2021 \u2013 June 2022)
- Position: Mid-Level Software Developer
- Location: Manaus, AM, Brazil
- Responsibilities: Developed a web-based CRUD system for document management and version control. Implemented edit tracking with user identification and required change justifications, plus role-based access control for administrators and regular users, ensuring full traceability.
- Technologies: Vue.js, Vuetify, C#, Entity Framework (migrations), SQL Server

### Womp Telecom (July 2018 \u2013 April 2021)
- Position: Junior Software Developer
- Location: Manaus, AM, Brazil
- Project 1 \u2014 Mobile app for corporate fleet drivers: fuel control, vehicle maintenance management, and checklist execution, with a web-based admin system for accessing the collected data.
- Project 2 \u2014 Streaming application using Flussonic: converted multicast networks to unicast, enabling TV channel retransmission on a streaming platform.
- Project 3 \u2014 Urban mapping application: registration and monitoring of city light poles with attributes such as transformers, electrical networks, and fiber optic cables, integrated with Google Maps for asset identification and management.
- Technologies: Android (Java), MySQL, PHP, Google Maps, Flussonic

## Education
- Degree: Bachelor's in Computer Engineering
- Institution: Uninorte \u2013 Laureate International Universities
- Period: July 2014 \u2013 June 2021
- Location: Manaus, AM, Brazil

## Technical Skills

### Frontend
JavaScript, HTML, CSS, TypeScript, React, Next.js, Redux, Tailwind CSS, Styled-Components, Zustand, Axios, Playwright

### Backend
Node.js, Express, Python, FastAPI, Flask, PostgreSQL, MongoDB, MySQL, JWT, REST APIs

### DevOps & Cloud
Docker, Git, CI/CD, Linux, GitHub Actions, Google Cloud Platform (GCP), Jenkins, Vercel

### AI & Specialized
LLM (Large Language Models), LangChain, RAG (Retrieval-Augmented Generation), Qdrant, NLP, Botpress, Ollama

## Featured Projects

### Loan Management Dashboard
- Description: Web platform for managing loans, clients, installments, and payments with secure authentication, financial dashboards, and contract tracking.
- Technologies: Next.js, React, TypeScript, Tailwind CSS, Axios, React Hook Form, Zod, Zustand, JWT Authentication, Vercel
- Live: https://cheerful-puppy-9f8594.netlify.app/login
- GitHub: https://github.com/ws49066/loan_management_frontend

### Loan Management API
- Description: RESTful API for managing loans with JWT authentication, RBAC, loan simulation, and automatic installment generation.
- Technologies: Python 3.12, FastAPI, SQLAlchemy 2.0, PostgreSQL, Alembic, Pydantic, JWT, RBAC, Pytest, Docker
- Live: https://loan-management-backend-w4by.onrender.com/docs
- GitHub: https://github.com/ws49066/loan_management_backend

### TimeHub \u2013 Appointment Management System
- Description: Scheduling solution for administrators to manage clients, rooms, and appointments; customers can book services easily.
- Technologies: Next.js, React, TypeScript, Tailwind CSS, Zustand, React Hook Form, Zod, Axios, Express.js, MySQL, JWT, Docker, Vercel
- Live: https://papaya-cranachan-787dee.netlify.app/
- GitHub: https://github.com/ws49066/TimeHub_frontend

### Pok\xE9dex
- Description: Modern responsive web app to explore Pok\xE9mon with search, type filtering (18 categories), infinite scroll, and animated statistics.
- Technologies: Next.js, React, TypeScript, Tailwind CSS, Pok\xE9API, Vercel
- Live: https://ws49066.github.io/pokedex_nextjs/
- GitHub: https://github.com/ws49066/pokedex_nextjs

### Memory Game
- Description: Interactive memory card game with card flip animations, score tracking, timer, and multiple difficulty levels.
- Technologies: Next.js, React, TypeScript, Tailwind CSS, Vercel
- Live: https://ws49066.github.io/memory-game-nextjs/
- GitHub: https://github.com/ws49066/memory-game-nextjs

## Contact
- Email: ws49066@gmail.com
- Phone: +39 393 719 2154
- LinkedIn: https://www.linkedin.com/in/wandersonoliveiradev/
- GitHub: https://github.com/ws49066
- Location: Italy
- Available for: freelance projects and full-time opportunities
`;
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
async function handler(request) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }
  const { message, language = "en" } = body;
  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return json({ error: "Message is required" }, 400);
  }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return json({ error: "Server configuration error" }, 500);
  }
  const languageName = LANGUAGE_NAMES[language] ?? "English";
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
  let geminiRes;
  try {
    geminiRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemInstruction }] },
        contents: [{ role: "user", parts: [{ text: message.trim() }] }],
        generationConfig: { temperature: 0.4, maxOutputTokens: 512 }
      })
    });
  } catch {
    return json({ error: "Failed to reach AI service" }, 502);
  }
  if (!geminiRes.ok) {
    return json({ error: "AI service error" }, 502);
  }
  const data = await geminiRes.json();
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
  if (!reply) {
    return json({ error: "Empty response from AI" }, 502);
  }
  return json({ reply });
}

// entry.ts
var ALLOWED_ORIGINS = [
  "https://ws49066.github.io",
  "https://portfolio-gr44.vercel.app",
  "http://localhost:5173"
];
function cors(origin) {
  const allow = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin"
  };
}
var entry_default = {
  async fetch(request, env) {
    const headers = cors(request.headers.get("Origin"));
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });
    globalThis.process = { env };
    const res = await handler(request);
    const out = new Response(res.body, res);
    for (const [k, v] of Object.entries(headers)) out.headers.set(k, v);
    return out;
  }
};
export {
  entry_default as default
};
