# NEON AI Idol

Modern anime-style AI influencer subscription platform.

## Tech Stack
- Next.js 14 (TypeScript, Tailwind, Framer Motion, NextAuth)
- Express server for webhooks
- Stripe payments (subs + one-time stubs)
- MongoDB (dockerized, placeholder integration)
- Jest + React Testing Library
- Docker + Compose
- GitHub Actions + Vercel

## Getting Started

1. Copy envs:
```
cp .env.example .env
```
Fill keys (NextAuth, Google/Twitter, Stripe, OpenAI).

2. Install deps:
```
npm install
```

3. Dev servers:
```
# Web only
npm run dev
# Server only
npm run dev:server
# Or docker-compose
docker-compose up --build
```

4. Tests:
```
npm test
```

5. Lint/Format:
```
npm run lint
npm run format
```

6. Build:
```
npm run build
```

7. Deploy:
- Connect repo to Vercel; set env vars.
- Add `VERCEL_TOKEN` secret for GitHub Actions.

## Notes
- Subscription tiers: `/api/tiers`
- Stripe webhooks: Next.js `/api/stripe/webhook` or server `/webhooks/stripe`
- Age gate and GDPR consent included.