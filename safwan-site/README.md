Personal portfolio site built with Next.js, styled after the [Penora](https://github.com/SafwanHasan120/penora) front-end: dark theme, Alegreya + Jost typography, and clean section layouts.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customizing Content

All copy and links live in **`data/site.ts`**. Edit that file to change:

- **`site`** — Name, tagline, headshot path, about paragraph, email
- **`experience`** — Roles, companies, dates, descriptions
- **`skills`** — List of skills (displayed as tags)
- **`projects`** — Title, description, link, optional award
- **`social`** — GitHub, LinkedIn, Instagram URLs

**Headshot:** Put your photo at `public/headshot.jpg` and set `site.headshot` to `"/headshot.jpg"`. Until then, the site uses a placeholder at `public/headshot.svg`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
