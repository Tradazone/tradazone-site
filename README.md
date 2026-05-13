# tradazone-site

Marketing website for the Tradazone crypto invoicing and payment platform.

**Production URL:** https://tradazone.com  
**Hosting:** GitHub Pages  
**Part of:** [Tradazone Platform](https://tradazone.com)

---

## Related Repositories

| Repository | Purpose | Domain |
|---|---|---|
| `tradazone` | React application | app.tradazone.com |
| `tradazone-api` | Backend API | api.tradazone.com |
| `tradazone-site` (this) | Marketing website | tradazone.com |

---

## Tech Stack

- **HTML5** — no build step required
- **Tailwind CSS** via CDN — utility-first styling
- **GitHub Actions** → **GitHub Pages** — CI/CD

No JavaScript framework or build tool needed. The site deploys the root directory directly.

---

## Local Development

```bash
# Just open in a browser
open index.html

# Or serve locally with any static server
npx serve .
# or
python3 -m http.server 8000
```

---

## Deployment

### GitHub Pages (Automatic)

Every push to `main` triggers the GitHub Actions workflow which deploys the entire repository root to GitHub Pages.

The `CNAME` file tells GitHub Pages to serve the site at `tradazone.com`.

### Custom Domain DNS Setup

In your DNS provider, add:

```
Type   Name   Value
A      @      185.199.108.153
A      @      185.199.109.153
A      @      185.199.110.153
A      @      185.199.111.153
CNAME  www    tradazone.github.io
```

Then in **GitHub repo → Settings → Pages → Custom domain**, enter `tradazone.com` and enable **Enforce HTTPS**.

> Use A records (not CNAME) for the apex domain (`tradazone.com`). Use CNAME for `www`.

---

## Adding Pages

To add a new page (e.g., `/docs`):

1. Create a new directory: `docs/`
2. Add an `index.html` inside it
3. Link to it from the nav in `index.html`
4. Push to `main` — it deploys automatically

---

## License

Private — Tradazone © 2025
