# mollyhickey.com

Personal portfolio site, migrated from Base44 to a standalone Vite + React + Tailwind project and hosted on GitHub Pages.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/deploy.yml`).
`public/CNAME` tells Pages to serve the site at `mollyhickey.com`.

### One-time setup

1. GitHub repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. GoDaddy → **mollyhickey.com → DNS**:
   - Replace the `@` A record(s) with these four A records:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Set a `www` CNAME record to `mhickey06.github.io`
   - Make sure domain forwarding is off.
3. Back in **Settings → Pages**, enter `mollyhickey.com` as the custom domain, wait for the DNS check to pass, then tick **Enforce HTTPS**.
