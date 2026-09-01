# The Source — Client Brief

Source of truth compiled from client materials. Do not invent facts, labs, lots, assays, prices, or claims beyond what is listed here.

---

## Sources

| Item | Location |
| --- | --- |
| Client email | Pasted handover to Gwyn |
| Brand guidelines (22 pages) | `The-Source-Branding-Attachments (1)/The-Source-Brand-Guidelines.pdf` |
| Gold TS monogram (primary) | `The-Source-Branding-Attachments (1)/The-Source-TS-Monogram-Gold.png` |
| Ink TS monogram | `The-Source-Branding-Attachments (1)/The-Source-TS-Monogram-Ink-Black.png` |
| White TS monogram (reversed) | `The-Source-Branding-Attachments (1)/The-Source-TS-Monogram-White.png` |
| Live site (visual source of truth) | https://thesource.gold/ |

### Email note vs PDF

The email said parts of the PDF were developed for a separate peptide ecommerce concept, and that product / certificate / research-material / website-builder sections **may not apply**.

The PDF itself contains an explicit website build specification (pages 16–22). Use:

- **Brand identity (name, logo, color, type, spacing, voice)** — apply.
- **Website / commerce / certificate structure in the Builder Handoff** — treat as the site spec.
- **Specific product or scientific facts** — use only if verified on the live site or by the client. Otherwise show **Unavailable**.

---

## 1. What the client wants

**Preserve the house. Make it easier to use.**

**Established, not reimagined.**

This is not a rebrand. Build a more usable, complete ecommerce / research-material website that still looks like The Source.

The finished result should look like a more usable and complete version of Casey’s current site, not a different brand.

Direction from the PDF:

> Build from the identity already established on The Source website: warm ivory, gold, dark brown ink, classical typography, generous space, and restrained luxury.

Character words the PDF uses:

- Refined — ivory and gold
- Classical — Cinzel and Cormorant
- Discreet — quiet spacing
- Precise — thin rules and labels
- Established — not reimagined

Brand feeling: private, refined, classical, precise.

---

## 2. Brand foundation

| Item | Client spec |
| --- | --- |
| Company / brand name | The Source |
| Founder | Casey Christopher |
| Brand line (keep; do not replace) | Precision. Purity. Performance. |
| House vocabulary (keep) | The Collection, The Standard, The Foundations, Atelier |
| Visual source of truth | https://thesource.gold/ |

Do not add new slogans that compete with the current tagline.

Use Casey’s name and credentials only when source material verifies them.

---

## 3. Logo

Primary asset: the existing **gold TS monogram**.

Pair it with **THE SOURCE** in Cinzel where a wordmark is needed (same treatment as the current site navigation).

### Rules (do not break)

- Do not redraw, stretch, crop, simplify, or replace the mark.
- Preserve proportions.
- Clear space around the monogram = the width of its central stem.
- Gold original on ivory and white fields.
- One-color ink, or reversed white, only where contrast or production requires them.

### Files to use

| File | Use |
| --- | --- |
| `The-Source-TS-Monogram-Gold.png` | Primary. Ivory / white fields |
| `The-Source-TS-Monogram-Ink-Black.png` | Single-color ink when required |
| `The-Source-TS-Monogram-White.png` | Reversed lockup on dark fields |

---

## 4. Color system

Ivory is the default field. Gold punctuates the page; it does not flood it.

Build most pages from Ivory, White, Ink, and Soft Ink. Cream creates quiet separation without a new hue.

| Token | Hex | Client usage |
| --- | --- | --- |
| Ivory | `#FDFCF8` | Primary page background |
| Cream | `#F8F4EC` | Warm panels and quiet contrast |
| White | `#FFFFFF` | Cards and product fields |
| Ink | `#191307` | Primary type, navigation, icons |
| Soft Ink | `#5D5545` | Secondary copy |
| Gold | `#BE9E56` | Monogram, key rules, labels, selected accents |
| Deep Gold | `#8A6D3B` | Links, borders, darker gold details |
| Gold Light | `#E6D3A3` | Highlights and gradient midpoint |
| Noir | `#120D07` | Limited dark sections only |
| Noir Soft | `#1E1710` | Limited dark sections only |

### Do not introduce

Blue, oxblood, cool gray, neon, or any other competing accent.

### Approved metallic gradient (buttons / high-value details only)

```css
linear-gradient(105deg, #6B5329 0%, #8A6D3B 35%, #E6D3A3 50%, #8A6D3B 65%, #6B5329 100%)
```

Keep it limited to selected actions and gold details. Do not cover large page areas. Stay inside the existing gold range.

---

## 5. Typography

Three-typeface system. Do not replace it.

### Cinzel

Wordmark, navigation moments, Roman numerals, labels, short uppercase statements.

Wide tracking.

Examples of label treatment (typography samples, not live lot data):

- `THE SOURCE`
- `PRECISION. PURITY. PERFORMANCE.`
- `LOT 26A-041`
- `TESTED 18 AUG 2026`
- `ASSAY VERIFIED`
- `CERTIFICATE AVAILABLE`

### Cormorant Garamond

Hero statements, section headlines, quotations, editorial moments.

Regular and italic.

### Jost

Body copy, product information, forms, buttons, utility text, controls.

Light and regular for body. Medium for controls. Comfortable line height.

Long informational copy stays **left aligned**. Centered layout is for ceremonial / display moments only.

Preserve the live site’s wide tracking, light body weights, generous line height, and centered ceremonial moments.

---

## 6. Layout and UI

### Yes

- Generous ivory negative space
- Thin gold hairline rules
- Small gold ornaments
- Centered display moments
- Large editorial product photography
- Buttons with gold borders or the approved gold gradient
- Square or nearly square corners

### No

- Rounded SaaS cards
- Glassmorphism
- Neon accents
- Heavy shadows
- Clinical blue
- Generic dashboard styling
- Pill / capsule-heavy UI copied from other brands

---

## 7. Layout references (structure only)

These are composition references, not identities to copy.

Borrow only layout logic, spacing, hierarchy, and component behavior. Reskin every borrowed pattern with The Source identity above.

Do not copy any reference site’s logo, colors, typography, imagery, wording, health claims, corner-radius system, or distinctive branded artwork.

| Site | Borrow | Do not copy |
| --- | --- | --- |
| [Aesop](https://www.aesop.com/) | Editorial hierarchy; full-width image-led hero; disciplined text placement; split between utility links, primary nav, and campaign content; restrained outlined actions; quiet carousel controls | Palette, logo, type, product language, exact creative |
| [Immortals peptides](https://immortals.com/collections/peptides) | Explain the category before the grid; collection introduction; one primary action; immediate product preview; clear card hierarchy; category labels; visible product imagery; guided selection **only** if questions fit the approved research-use model | Blue palette, rounded capsule language, health claims, recommendation copy |
| [Rhode](https://www.rhodeskin.com/) | Generous framing / outer gutters; large campaign module; centered brand presence; clean edge spacing; minimal commerce navigation; single-action hero; large imagery then compact product modules | Colors, rounded containers, logo, celebrity imagery, product styling |

---

## 8. Photography

Follow the current art direction:

- Warm ivory and cream surfaces
- White packaging
- Gold hardware
- Soft natural light
- Controlled shadows
- Tactile materials
- Quiet, premium product imagery

Avoid:

- Generic laboratory stock
- Blue DNA imagery
- Lifestyle / outcome imagery
- Smoke
- Unrelated marble-and-gold luxury clichés

---

## 9. Voice

Keep the house language, then make it concrete.

### Write this

- Use The Collection, The Standard, The Foundations, Atelier
- Pair atmosphere with facts (example pattern: “Certificate updated August 18, 2026.” — only if that date is verified)
- Keep Precision. Purity. Performance. as the primary brand line
- Evidence should be easier to find than persuasion

### Avoid this

- New competing slogans
- New colors or trendy typefaces
- Clinical-blue redesign
- Dense luxury language where a product fact is needed
- Benefit claims, outcomes, testing data, and credentials that are not verified

---

## 10. Legal / copy boundary

Do not invent:

- Claims
- Outcomes
- Credentials
- Laboratory relationships
- Test results
- Testimonials
- Service levels
- Product details
- Dosing guidance
- Personal protocols
- Symptom questions
- Body-outcome promises
- Unapproved benefit-led categories

Missing facts say **Unavailable**. Never invent a realistic placeholder.

Product intent and research-use language require specialized legal review. A footer disclaimer does not correct contradictory merchandising or page copy.

All research compounds: laboratory research use only — not for human consumption. (Live-site language.)

---

## 11. Website spec (from the PDF)

Design and build a **responsive ecommerce website** for The Source, founded by Casey Christopher.

Treat https://thesource.gold/ as the visual source of truth.

Improve clarity and usability while making the finished site unmistakably The Source.

### Navigation (PDF)

`THE SOURCE` · `CATALOG` · `CERTIFICATES` · `CART`

Preserve established navigation and house structure where practical. Minimal premium nav, not a mega-menu.

### Homepage

First screen must state:

1. What The Source offers
2. Who it is for
3. What proof / documentation is available

Do not make visitors decode the offer.

Include:

- The Collection
- The Foundations
- The Standard
- Atelier
- Certificate access
- Research support
- Casey’s sourced founder story (only verified material)

Hero pattern from the PDF:

> Research materials. Every batch accounted for.
> Clear identity, current documentation, and direct research support.

### Collection

Explain the category before the grid.

Category introduction → primary action → product preview / grid.

### Product card

Keep visible:

- Amount
- Price
- Lot status
- Certificate access

Pattern:

```
AVAILABLE / DOCUMENTED
[Compound name]
[quantity] [price]
```

Luxury plus information clarity. Not a purely editorial card.

### Product page

Easy to find, not buried under marketing:

- Product name
- Amount
- Price
- Availability
- Current lot
- Certificate access
- Approved specifications
- Handling information
- Testing method
- Laboratory identity
- Verified date
- Shipping
- Support

Do not hide the certificate beneath promotional content.

### Certificate system

Website component, not a new identity. Same ivory / ink / gold / Cinzel / Jost system.

Use on product pages and certificate results.

Never hide the document beneath marketing or an accordion.

Lookup pattern:

```
CERTIFICATE LOOKUP
LOT        [ID]
STATUS     DOCUMENTED
TESTED     [DATE]
DOCUMENT   VIEW PDF
```

Reusable panel may show (verified data only):

| Field | Value |
| --- | --- |
| Compound | [verified name] |
| Lot | [lot ID] |
| Tested | [verified date] |
| Assay | Unavailable if not verified |
| Certificate | [document link] |
| Storage | [approved language] |

---

## 12. Motion, mobile, accessibility

- Slow, restrained hero movement
- Small fades for editorial moments
- Fast commerce interactions
- Respect `prefers-reduced-motion`
- Mobile: search, cart, product status, and certificate access within easy reach
- Minimum tap target: **44px**
- WCAG AA contrast

---

## 13. Deliverables (client list)

Accessible desktop and mobile for:

1. Homepage
2. Collection
3. Product detail
4. Certificate lookup
5. The Standard
6. The Foundations
7. Atelier
8. About
9. Support
10. Cart
11. Legal templates

States:

12. Loading
13. Empty
14. Sold out
15. Certificate unavailable
16. Validation error

---

## 14. Verified from the live site

Use as identity / content reference. Do not expand into unapproved claims.

### Positioning (homepage)

- Research Use Only — supplied strictly for laboratory research
- Third-Party Tested — every batch tested for purity & potency
- Secure & Discreet
- Fast Dispatch — out the door within 24 to 48 hours
- For laboratory research use only. Not for human consumption.

### The Collection (names on homepage)

GLP3-R, BPC-157, TB500, NAD+, GLOW, KLOW, MOTS-C, Tesamorelin

### The Foundations Kit (homepage)

Four compounds: GLP3-R, KLOW, Adamax, MOTS-C

Line on site: “Where the new habits begin.” / “Four compounds studied together — metabolic, repair, cognitive, cellular. One stack under the mark.”

PDF legal rule still applies: do not turn those phrases into body-outcome or protocol copy.

### The Standard (https://thesource.gold/the-standard)

Founded MMXXV by Casey Christopher.

Live-site labs named on that page: Vanguard Laboratory, Kovera Labs, Freedom Diagnostics — American, independent of the house. Use only as the live site uses them. Do not invent additional lab relationships.

Certificate of analysis: available on request (`admin@thesource.gold` on that page). Lot / report verify field exists on The Standard.

Shipping from the USA, 24–48 hours. Complimentary U.S. shipping. Payments: Card, Zelle, Venmo, Cash App.

### Atelier (homepage)

Drop 001 — MMXXVI. Invitation. Apparel and essentials listed on the homepage (tees, hoodies, beanie, duffel, tumbler, shaker, mug, towel, umbrella, challenge coin). Include Atelier in the build; do not invent extra Drop copy.

### Founder line on homepage

> You do not chase the standard. You return to it.  
> Casey Christopher, Founder

---

## 15. Builder handoff (client text, pages 20–22)

Copy into the site build. This is the client’s instruction, not a rewrite.

Design and build a responsive ecommerce website for The Source, founded by Casey Christopher. Treat https://thesource.gold/ as the visual source of truth. Preserve the existing identity. Do not replace it with a new palette, new logo, or trend-driven redesign.

The existing brand line is “Precision. Purity. Performance.” The brand feels private, refined, classical, and precise. Keep the established house vocabulary, including “The Collection,” “The Standard,” “The Foundations,” and “Atelier.” Improve clarity and usability while making the finished site unmistakably The Source.

Use Aesop at https://www.aesop.com/ for editorial hierarchy: a full-width image-led hero, disciplined overlaid navigation, a clear utility layer, restrained outlined actions, and quiet carousel controls.

Use the Immortals peptide collection at https://immortals.com/collections/peptides for commerce structure: explain the category before showing products, use a strong collection introduction, make product-card hierarchy obvious, and keep guided selection close to the catalog.

Use Rhode at https://www.rhodeskin.com/ for campaign framing: generous outer gutters, a large image-led campaign module, centered brand presence, minimal commerce navigation, and a clean transition into product modules.

Borrow only layout logic, spacing, hierarchy, and component behavior. Do not copy any reference site’s logo, colors, typography, imagery, wording, health claims, corner-radius system, or distinctive branded artwork. Every borrowed pattern must be reskinned with The Source identity.

The result should look like a more usable and complete version of Casey’s current site, not a different brand.
