# Content editing with Sanity

The site's content can be edited in Sanity Studio at **/studio** (for example `http://localhost:3000/studio`).

Until Sanity is connected, the site reads the JSON files in `src/data`, so nothing breaks. If Sanity is connected but can't be reached, the site falls back to those same files.

## What you can edit

| In the Studio | Shows on |
|---|---|
| Pages → Home page | "Built for" strip, Who we are text, What we build cards, How we work steps, Why us cards |
| Pages → Services page | Services page title, intro and search engine text |
| Pages → Alu360 page | Alu360 hero and feature sections |
| Services | Each service on /services (order, text, screenshots or flow steps) |
| Projects & case studies | Cards on /projects; the "Case study page" tab fills /projects/<slug> |
| FAQs | Home page or Services page FAQ (pick with "Show on") |
| Journey | The "How we got here" timeline on the home page |
| Testimonials | Quote cards on the home page (hidden while the list is empty) |

Lists are sorted by their **Order** field, lowest first.

## One-time setup

1. **Create the Sanity project.** Sign in at [sanity.io/manage](https://www.sanity.io/manage) and create a project (the free plan is enough). Note its **Project ID**. Use the dataset name `production`.

2. **Add the environment variables** to `.env` locally and to the hosting provider:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=<your project id>
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_REVALIDATE_SECRET=<any long random string>
   ```

3. **Allow the site to use the Studio.** In sanity.io/manage → API → CORS origins, add `http://localhost:3000` and the live site URL (for example `https://www.samvay360.com`), each with **Allow credentials** ticked.

4. **Copy the current content into Sanity.** From the project folder:

   ```bash
   npx sanity login
   ```

   ```bash
   npm run sanity:seed
   ```

   ```bash
   npx sanity dataset import sanity-seed.ndjson production --replace
   ```

   This uploads every page, service, project, FAQ and journey entry, plus the screenshots in `public/`. Running it again overwrites the same documents, so it is safe to repeat. Don't repeat it after people have started editing in the Studio, or their edits will be replaced.

5. **Publish changes instantly.** In sanity.io/manage → API → Webhooks, add a webhook:
   - URL: `https://www.samvay360.com/api/revalidate`
   - Dataset: `production`
   - Trigger on: Create, Update, Delete
   - HTTP method: POST
   - Secret: the same value as `SANITY_REVALIDATE_SECRET`

   Without the webhook, published changes still appear within an hour.

6. **Invite your team** in sanity.io/manage → Members.

## How it works (for developers)

- `src/lib/content.ts` is the only place pages get content from. Each function queries Sanity and returns the same shape as the matching JSON file.
- Schemas live in `src/sanity/schemaTypes`; the Studio sidebar is set in `src/sanity/structure.ts`.
- Every query is cached under the `sanity` tag; `/api/revalidate` clears it when the webhook fires.
- The public site lives in the `src/app/(site)` route group so the Studio renders full-screen without the header and footer.
