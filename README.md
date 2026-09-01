# The Source — Website

**Established, not reimagined.** A more usable, complete ecommerce build of [thesource.gold](https://thesource.gold/) — same ivory/gold/ink identity, clearer commerce UX.

## Run locally

```bash
npm install
npm run dev
```

On Windows (Node at `D:\nodejs`):

```powershell
npm run dev:win
```

Sync brand assets from the live site:

```powershell
npm run sync-assets
```

## Deploy on Vercel

1. Import [github.com/Emmanuelombaye/thesource](https://github.com/Emmanuelombaye/thesource) in Vercel.
2. **Framework preset:** Next.js (auto-detected)
3. **Build command:** `npm run build`
4. **Install command:** `npm install`
5. **Node.js version:** 20.x
6. Deploy — no environment variables required for the static storefront.

Production URL should use `metadataBase` already set to `https://thesource.gold` in `layout.tsx`. Update that value if deploying to a different domain.

## Logos

Official client monograms (optional upgrade):

- `public/logos/The-Source-TS-Monogram-Gold.png`
- `public/logos/The-Source-TS-Monogram-Ink-Black.png`
- `public/logos/The-Source-TS-Monogram-White.png`

If missing, the site falls back to `public/brand/logo-mark.png` (synced from the live site).

## What's built

- Centered luxury nav + announcement ribbon (matches live site)
- What / Who / Proof clarity strip in hero
- Guided category selection on The Collection
- Full-bleed editorial hero, campaign modules, atelier carousels
- Search overlay, cart, checkout (Card / Zelle / Venmo / Cash App + RUO)
- Certificate lookup, Concierge widget, age gate
- Brand tokens: Cinzel, Cormorant Garamond, Jost · ivory, cream, gold, ink

## Still from client

- Verified lot IDs + COA PDFs for certificate database
- Payment/checkout backend integration
- Official separate monogram PNGs (optional)
