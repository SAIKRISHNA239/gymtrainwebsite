# Deploy to Netlify (5 steps)

1. Push this project to a Git repository (GitHub/GitLab/Bitbucket).
2. On Netlify, click "New Site from Git" and connect your repo.
3. Build command: `npm run build` — Publish directory: `dist`.
4. (Optional) Enable Netlify Forms: go to Forms in the dashboard after first deploy; your `contact` form will appear automatically.
5. (Optional) Serverless email: create a Netlify Function using SendGrid. Set env vars: `SENDGRID_API_KEY`, `TO_EMAIL`, `FROM_EMAIL`. Call function from the form submit for emails.
