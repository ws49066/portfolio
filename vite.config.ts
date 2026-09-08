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
- Experience: 5+ years (professional career started July 2018)
- Current location: Italy
- Languages: Portuguese (native), English (professional), Italian (learning)

## Bio
Full Stack Software Engineer with 5+ years of experience building scalable web applications, automation platforms, and cloud-native solutions. Specialized in React, Next.js, Python, and modern backend architectures, with hands-on experience designing high-impact automation systems.

## Work Experience

### Contabilizei (February 2026 – Present)
- Position: Mid-Level Software Developer
- Develops and maintains 21+ automation bots for CNPJ registration using Python, FastAPI, Flask, Playwright, and GCP.

### Sidia Instituto de Ciência e Tecnologia (July 2022 – February 2026)
- Position: Mid-Level Software Developer
- Full stack developer: Samsung binary validator, AI/NLP chatbot, Android sample manager.
- Technologies: Next.js, TypeScript, Python, LLM, Docker

### Kodigos Software LTDA (May 2021 – June 2022)
- Position: Mid-Level Software Developer
- Document management CRUD with multi-level permissions. Technologies: Vue.js, C#, Entity Framework, SQL Server

### Womp Telecom (July 2018 – April 2021)
- Position: Junior Software Developer
- Android apps for fleet management, web admin systems, TV streaming app.

## Education
- Bachelor's in Computer Engineering — Uninorte, Manaus (2014–2021)

## Technical Skills
- Frontend: JavaScript, TypeScript, React, Next.js, Tailwind CSS, Zustand, Axios, Playwright
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
