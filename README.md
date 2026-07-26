# Goan Parampara — Next.js Storefront

Rich, heritage-led redesign of goanparampara.com, built with Next.js 14 (App
Router), TypeScript, and Tailwind CSS. This is the frontend only — it
currently uses placeholder product data in `lib/data.ts`; the next phase is
wiring it up to a Medusa.js backend for real product/order management.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. First run will download the Fraunces and Inter
fonts from Google Fonts, so make sure you have a normal internet connection.

## Project structure

```
app/
  layout.tsx       Root layout, fonts, metadata
  page.tsx          Homepage — assembles all sections
  globals.css       Tailwind base + custom utility classes
components/
  Header.tsx        Sticky nav, scroll-aware styling
  Hero.tsx          Full-bleed hero with woven-border signature element
  LegacyStrip.tsx   Trust signals (natural dyes, made in Goa, etc.)
  OurStory.tsx       Heritage storytelling section
  MakingOfFabric.tsx Process steps (dye → weave → measure)
  FeaturedCollection.tsx  Product grid
  ShopByCategory.tsx Category tiles
  Gallery.tsx        Horizontal-scroll photo strip
  Contact.tsx        Contact form
  Footer.tsx         Site footer
  WovenBorder.tsx    The signature gold-striped border motif
  Reveal.tsx         Scroll-triggered fade/slide-in wrapper (framer-motion)
lib/
  data.ts            Design tokens' companion data — nav links, placeholder
                      products, image URLs currently pointing at the live
                      goanparampara.com media library
  medusa.ts           Stub for the future Medusa.js API client
```

## Design tokens

Colors and fonts are defined in `tailwind.config.ts`:

| Token          | Hex       | Use                              |
|----------------|-----------|-----------------------------------|
| `oxblood`      | `#5E1620` | Primary brand red                |
| `oxblood-dark` | `#3E0F17` | Dark sections, footer            |
| `rust`         | `#9C4A24` | Accent text, prices               |
| `gold`         | `#B98A46` | Borders, buttons, signature strip |
| `gold-light`   | `#D8B77E` | Light accents on dark backgrounds |
| `ivory`        | `#F4ECDD` | Main background                  |
| `ivory-deep`   | `#EBE0CB` | Section background variation      |
| `ink`          | `#2B1712` | Body text                        |

## Known placeholder content

- Product images and copy are currently pulled from the live WordPress site
  (`goanparampara.com/wp-content/uploads/...`) for accuracy during design
  review. Once Medusa is set up, replace `FEATURED_PRODUCTS` in `lib/data.ts`
  with a live fetch (see the commented example in `lib/medusa.ts`).
- Inner pages (product detail, cart, category pages, about, contact) are
  linked from the nav/footer but not yet built — homepage first, as agreed.

## Next steps

1. Review this homepage build and iterate on the design.
2. Set up Medusa.js (backend + admin panel) with Postgres.
3. Replace placeholder data with live Medusa API calls (ISR via
   `next: { revalidate }` on fetches, so pages stay static/fast).
4. Build out product detail, category, cart, and checkout pages.
