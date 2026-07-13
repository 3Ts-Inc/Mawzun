# Mawzun Advisory

Production website for Mawzun Advisory.

## Development

Requires Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

## Deployment

The production branch is `main`. Import this repository into Vercel using the
detected Next.js defaults. No environment variables are required to render the
site.

Set `NEXT_PUBLIC_SITE_URL` after the final domain is selected so canonical and
social metadata use the production address.

See:

- `HANDOFF.md` for hosting and ownership.
- `CMS_PLAN.md` for the content-management implementation.
- `CMS_SETUP.md` for the prepared Sanity connection and setup instructions.
- `MEETING_RUNBOOK.md` for the June 18 handover call.
