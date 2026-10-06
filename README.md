# Africa Climate Actions PLC

The Africa Climate Actions PLC website presents the company’s climate solutions, services, projects, partnerships, and impact. It is built as a statically generated Astro site.

- **Live site:** https://aca-bwaw.onrender.com
- **Repository:** https://github.com/gebre-tech/aca

## Requirements

- Node.js `>=22.12.0`
- npm (the repository includes `package-lock.json`)
- Git

## Local development

From the repository root:

```sh
npm install
npm run dev
```

Astro starts the local development server and prints its URL in the terminal (normally `http://localhost:4321`).

## Production build

```sh
npm run build
```

Astro generates the static production site in `dist/`. This output contains the built pages and assets and can be served by a static hosting provider.

## Production preview

After building, preview the generated site locally with:

```sh
npm run preview
```

## Render deployment

The root [`render.yaml`](./render.yaml) configures this project as a Render static site.

1. Connect `gebre-tech/aca` to Render.
2. Select the `main` branch.
3. Create or update the service using the repository’s Render Blueprint (`render.yaml`).
4. The Blueprint pins Node.js to `22.12.0`; the website does not currently require application-specific environment variables.
5. Deploy the static site. Render installs from the npm lockfile, runs the production build, and publishes `dist/`. With automatic deploys enabled, later commits to `main` trigger a new build and deployment.
6. Open the URL Render assigns to the service and verify the home page, project page, and assets. The configured site metadata currently uses `https://aca-bwaw.onrender.com`; update it only after an official final domain is confirmed.

This is a static deployment: there is no production Node server or start command. The contact form still has a placeholder action and will not submit to a real service until an approved endpoint is connected.

## Remaining TODOs

- **Contact details** — Replace placeholders with the official ACA phone, email, address, and other contact information.
- **Form endpoint** — Connect the contact/inquiry form to the approved production backend/email/form service. Do not invent an endpoint.
- **Logo** — Replace any temporary/placeholder logo with the official ACA logo.
- **Real photos** — Replace placeholder/stock/demo images with approved real ACA/project photos.
- **Partner logo permissions** — Confirm permission/licensing/approval before publicly displaying partner/client/organization logos.
- **Domain** — Configure the final official custom domain in Render after the domain is confirmed.
