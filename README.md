# OSHO Mystery School Nepal

A production-oriented Next.js website for a meditation and retreat center near Kathmandu. The interface follows the supplied Google Stitch desktop and mobile designs. Photography is intentionally represented by centralized neutral placeholders until approved images are uploaded through Decap CMS.

## Technology

- Next.js App Router, React, and TypeScript
- Tailwind CSS
- `next/image` through a shared responsive image component
- Markdown front matter for file-based content
- Decap CMS with Git Gateway
- Netlify deployment and form handling
- No application database

## Local development

Node.js 20.9 or newer is recommended.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The content manager entry point is `/admin`, but authentication and publishing require a connected Netlify site with Identity and Git Gateway configured.

## Verification and production build

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the canonical production URL in Netlify if it differs from `https://oshomysteryschoolnepal.com`.

## Content and images

Editable entries live under `content/`:

- `content/gallery/`
- `content/events/`
- `content/retreats/`
- `content/meditations/`
- `content/testimonials/`
- `content/stay/`
- `content/pages/`
- `content/settings/`

Uploaded media is stored in `public/images/uploads/`. When an entry has no image, `ResponsiveImage` renders a neutral labeled placeholder at the same aspect ratio and crop. Do not add Stitch reference photography to the repository.

For a healthy Git repository, resize photographs before upload. Prefer WebP or a well-compressed JPG, generally no larger than 2400 pixels on the longest edge and ideally below 2 MB. If the library eventually grows to hundreds of large photographs, migrate the CMS media field to a dedicated image service without changing the page components.

## Decap CMS and Netlify

The CMS files are in `public/admin/`. It uses the `git-gateway` backend and publishes content commits to the `main` branch.

Deployment setup:

1. Push the repository to GitHub.
2. Import the repository into Netlify.
3. Enable Netlify Identity and set registration to **Invite only**.
4. Enable Git Gateway under Identity services.
5. Invite the administrator.
6. Deploy. Content published in `/admin` creates a Git commit; Netlify detects the commit and rebuilds the site.

The contact form is marked for Netlify Forms and does not require a database.

## Administrator guide

1. Open `/admin` on the live website.
2. Sign in with your invited account.
3. Choose Gallery, Events, Retreats, Meditations, Testimonials, Stay, Page Content, or Site Settings.
4. Add or edit the text.
5. Upload a photograph when needed.
6. Select **Publish**.

The site design—colors, typography, spacing, layouts, and components—is intentionally not editable in the CMS.

## Design source

The implementation was derived from these Stitch projects:

- Desktop: `Osho Nepal Digital Sanctuary` (`14799891392093980331`)
- Mobile guidance: `Osho Mystery School Kathmandu` (`16708628699371364530`)

The extracted system pairs Playfair Display with Montserrat, uses warm cream surfaces, deep forest typography, terracotta actions, an 8px spacing unit, restrained corners, generous 128px section spacing, atmospheric hero image placements, editorial split sections, and asymmetric bento layouts.
