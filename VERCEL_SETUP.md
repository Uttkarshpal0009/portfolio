# Vercel setup

This repository is already the Vite project root. In Vercel, open **Settings → General → Root Directory** and set it to `./` (or leave it blank).

Do not set Root Directory to `portfolio` when the GitHub repository itself contains `package.json`, `src`, `public`, and `vite.config.js` at its root.

Then go to **Deployments** and redeploy the latest `main` commit.

The project uses:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
