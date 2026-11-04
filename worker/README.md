# Chat no Cloudflare Worker

`chat-worker.js` é o `api/chat.ts` empacotado para o Cloudflare Workers, com CORS para o GitHub Pages.

Para regerar depois de mudar `api/chat.ts`:

```bash
npx esbuild@0.25 worker/entry.ts --bundle --format=esm --platform=neutral --outfile=worker/chat-worker.js
```

No Worker, cadastre o segredo `GEMINI_API_KEY` (Settings → Variables and Secrets).
