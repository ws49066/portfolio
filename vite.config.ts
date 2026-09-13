import { defineConfig, loadEnv } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import type { IncomingMessage, ServerResponse } from 'http'

const LANGUAGE_NAMES: Record<string, string> = {
  en: 'English',
  pt: 'Brazilian Portuguese',
  it: 'Italian',
}

const knowledgeBase = `
# Wanderson Oliveira — Portfolio Knowledge Base

## Personal Profile
- Full name: Wanderson Oliveira
- Role: Full Stack Software Engineer
- Experience: 8+ years (professional career started July 2018)
- Current location: Italy
- Languages: Portuguese (native), English (Intermediate-Advanced, B2), Italian (Basic, A2)

## Bio
Full Stack Software Engineer with 8+ years of experience building scalable web applications, automation platforms, and cloud-based solutions. Specialized in React, Next.js, Python, and modern backend architectures, across frontend, backend, DevOps, and Google Cloud Platform. Delivered high-impact automation systems, AI-powered applications, and enterprise solutions. Passionate about software architecture, automation, and AI-driven innovation.

## Work Experience

### Contabilizei (February 2026 – Present)
- Position: Mid-Level Software Developer
- Develops and maintains 21+ automation bots for CNPJ registration using Playwright on government portals and Python, FastAPI, Flask. Event-driven services on GCP (Cloud Run, Cloud Scheduler, Pub/Sub), improving reliability, monitoring, and error recovery.

### Sidia Instituto de Ciência e Tecnologia — Samsung R&D institute (July 2022 – February 2026)
- Position: Mid-Level Software Developer
- Samsung binary code validator: cut feature validation from 2–3 days to ~10 minutes.
- AI/NLP chatbot over internal documents: LangChain, LLaMA, Qdrant vector database, custom prompts with document references.
- Tech Lead, Android Sample Manager (remote test farm): client requirements, backlog, delivery schedule, team coordination.
- Technologies: Next.js, TypeScript, Python, LangChain, LLaMA, Qdrant, LLM, Docker

### Kodigos Software LTDA (May 2021 – June 2022)
- Position: Mid-Level Software Developer
- Document management CRUD with edit tracking, change justifications, and role-based access control. Technologies: Vue.js, Vuetify, C#, Entity Framework, SQL Server

### Womp Telecom (July 2018 – April 2021)
- Position: Junior Software Developer
- Fleet driver mobile app (fuel control, maintenance, checklists) with web admin system.
- Streaming app with Flussonic: multicast-to-unicast conversion for TV channel retransmission.
- Urban mapping app: city light poles, transformers, electrical networks, fiber optic cables, integrated with Google Maps.

## Education
- Bachelor's in Computer Engineering — Uninorte, Manaus (2014–2021)

## Technical Skills
- Frontend: JavaScript, HTML, CSS, TypeScript, React, Next.js, Redux, Tailwind CSS, Zustand, Axios, Playwright
- Backend: Node.js, Express, Python, FastAPI, Flask, PostgreSQL, MongoDB, MySQL, JWT
- DevOps & Cloud: Docker, Git, CI/CD, Linux, GitHub Actions, GCP, Jenkins, Vercel
- AI: LLM, LangChain, RAG, Qdrant, NLP, Botpress, Ollama

## Featured Projects
- Loan Management Dashboard: Next.js, React, TypeScript, Tailwind, Zod, Zustand, JWT — https://loan-management-frontend-nine.vercel.app/login
- Loan Management API: Python, FastAPI, PostgreSQL, JWT, RBAC, Docker — https://loan-management-backend-w4by.onrender.com/docs
- TimeHub: Next.js, Express, MySQL, Docker, Vercel — https://time-hub-frontend.vercel.app/
- Pokédex: Next.js, PokéAPI — https://pokedex-nextjs-ochre.vercel.app/
- Memory Game: Next.js, TypeScript, Tailwind — https://memory-game-nextjs-virid.vercel.app/

## Contact
- Email: ws49066@gmail.com
- Phone: +39 393 719 2154
- LinkedIn: https://www.linkedin.com/in/wandersonoliveiradev/
- GitHub: https://github.com/ws49066
- Location: Italy
`

function localApiPlugin(apiKey: string): Plugin {
  return {
    name: 'local-api-chat',
    configureServer(server) {
      server.middlewares.use('/api/chat', (req: IncomingMessage, res: ServerResponse) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        let body = ''
        req.on('data', (chunk: Buffer) => { body += chunk.toString() })
        req.on('end', () => {
          void (async () => {
            try {
              const parsed = JSON.parse(body) as { message?: string; language?: string }
              const { message, language = 'en' } = parsed

              if (!message?.trim()) {
                res.statusCode = 400
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: 'Message is required' }))
                return
              }

              const languageName = LANGUAGE_NAMES[language] ?? 'English'
              const systemInstruction = `You are an AI assistant for Wanderson Oliveira's portfolio. Respond only in ${languageName}. Only answer based on the knowledge base below. If you don't know, say so. Keep answers concise and professional.\n\nKNOWLEDGE BASE:\n${knowledgeBase}`

              const geminiRes = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    system_instruction: { parts: [{ text: systemInstruction }] },
                    contents: [{ role: 'user', parts: [{ text: message.trim() }] }],
                    generationConfig: { temperature: 0.4, maxOutputTokens: 512 },
                  }),
                }
              )

              const data = await geminiRes.json() as {
                candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>
                error?: { message?: string; status?: string }
              }

              if (!geminiRes.ok) {
                console.error('[api/chat] Gemini error:', geminiRes.status, data.error)
                res.statusCode = 502
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: data.error?.message ?? 'Gemini API error' }))
                return
              }

              const reply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
              console.log('[api/chat] reply length:', reply.length)

              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ reply }))
            } catch {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Internal server error' }))
            }
          })()
        })
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      svgr(),
      ...(mode === 'development' && env.GEMINI_API_KEY
        ? [localApiPlugin(env.GEMINI_API_KEY)]
        : []),
    ],
  }
})
