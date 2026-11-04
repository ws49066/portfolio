// Cloudflare Worker que roda o mesmo api/chat.ts da Vercel.
// Gere o arquivo para colar no painel com: node worker/build.mjs
import handler from '../api/chat';

const ALLOWED_ORIGINS = [
  'https://ws49066.github.io',
  'https://portfolio-gr44.vercel.app',
  'http://localhost:5173',
];

function cors(origin: string | null): Record<string, string> {
  const allow = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

export default {
  async fetch(request: Request, env: { GEMINI_API_KEY?: string }): Promise<Response> {
    const headers = cors(request.headers.get('Origin'));
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });

    // O api/chat.ts lê process.env, que não existe no Worker.
    (globalThis as unknown as { process: { env: Record<string, string | undefined> } }).process = { env };
    const res = await handler(request);

    const out = new Response(res.body, res);
    for (const [k, v] of Object.entries(headers)) out.headers.set(k, v);
    return out;
  },
};
