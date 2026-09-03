/**
 * One-shot generator: builds src/data/products.ts from scripts/_live-products.json
 * (scraped public name / amount / price / availability only).
 */
const fs = require("fs");
const path = require("path");

const raw = JSON.parse(
  fs.readFileSync(path.join(__dirname, "_live-products.json"), "utf8")
);

function categorize(name, slug) {
  const n = `${name} ${slug}`.toLowerCase();
  if (
    /\bbundle\b|\bstack\b|long.?shot|grand.?slam|freedom.?stack|radiant.?bundle/.test(
      n
    )
  ) {
    return "Stacks";
  }
  if (/glow|klow|ghk/.test(n)) return "Radiance";
  if (/glp|cagril|retatrutide|tirz|semaglut|amino.?1mq|5-amino/.test(n)) {
    return "Metabolic";
  }
  if (/bpc|tb.?500|tb500|kpv|ll-?37|ara.?290|ss-?31|vip|thy/.test(n)) {
    return "Recovery";
  }
  if (/nad|mots|epithalon|foxo/.test(n)) return "Longevity";
  if (
    /tesamorelin|ipamorelin|cjc|sermorelin|igf|semax|selank|adamax|pt-?141|n-acetyl/.test(
      n
    )
  ) {
    return "Growth";
  }
  return "Research";
}

function parseAmount(liveName, slug) {
  const blend =
    liveName.match(
      /(\d+(?:\.\d+)?\s*mg)\s*[\/+&]\s*(\d+(?:\.\d+)?\s*mg)/i
    ) || slug.match(/(\d+)mg-(\d+)mg/i);
  if (blend) {
    const a = `${String(blend[1]).replace(/\s+/g, "").replace(/mg$/i, "")}mg`;
    const b = `${String(blend[2]).replace(/\s+/g, "").replace(/mg$/i, "")}mg`;
    return `${a} / ${b}`;
  }
  const single =
    liveName.match(/(\d+(?:\.\d+)?)\s*mg/i) ||
    slug.match(/(\d+(?:\.\d+)?)mg/i);
  if (single) return `${single[1]}mg`;
  if (/bundle|stack|long.?shot|grand.?slam|freedom/i.test(liveName)) {
    return "Kit";
  }
  return "—";
}

function baseName(liveName) {
  return liveName
    .replace(
      /\s+\d+(?:\.\d+)?\s*mg(?:\s*[\/+&]\s*\d+(?:\.\d+)?\s*mg)?/gi,
      ""
    )
    .replace(/\s+Spray Kit/i, "")
    .replace(/\s+Long-?Lasting/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const products = raw
  .map((p) => {
    const liveName = p.liveName || p.name;
    const name = baseName(liveName) || p.name;
    return {
      slug: p.slug,
      name,
      categoryLabel: categorize(liveName, p.slug),
      amount: parseAmount(liveName, p.slug),
      price: p.price,
      status: p.status === "sold_out" ? "sold_out" : "available",
    };
  })
  .sort(
    (a, b) =>
      a.name.localeCompare(b.name) || a.amount.localeCompare(b.amount)
  );

const featured = [
  "glp3-r-30mg",
  "bpc-157-20mg",
  "tb500-20mg",
  "nad-1000mg",
  "glow-70mg",
  "klow-80mg",
  "mots-c-40mg",
  "tesamorelin-20mg",
];

const aliases = {
  "glp3-r": "glp3-r-30mg",
  "bpc-157": "bpc-157-20mg",
  tb500: "tb500-20mg",
  "nad-plus": "nad-1000mg",
  glow: "glow-70mg",
  klow: "klow-80mg",
  "mots-c": "mots-c-40mg",
  tesamorelin: "tesamorelin-20mg",
  adamax: "adamax-30mg",
};

let out = `/** Synced from thesource.gold public catalog — name, amount, price, availability only.
 * Lot / certificate fields stay Unavailable until the house provides verified records.
 */
export type ProductStatus = "available" | "documented" | "sold_out";

export interface Product {
  slug: string;
  name: string;
  category: "collection" | "foundations" | "atelier";
  categoryLabel?: string;
  description: string;
  amount: string;
  price: string;
  lotStatus: string;
  certificateAvailable: boolean;
  status: ProductStatus;
  specifications?: string;
  handling?: string;
  testingMethod?: string;
  laboratory?: string;
  verifiedDate?: string;
}

/** Homepage preview — flagship vials from The Collection */
export const featuredCollectionSlugs = ${JSON.stringify(featured, null, 2)} as const;

/** Legacy short slugs → live dose-specific slugs */
export const productSlugAliases: Record<string, string> = ${JSON.stringify(aliases, null, 2)};

export const collectionProducts: Product[] = [
`;

for (const p of products) {
  out += `  {
    slug: "${p.slug}",
    name: "${esc(p.name)}",
    category: "collection",
    categoryLabel: "${p.categoryLabel}",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "${esc(p.amount)}",
    price: "${p.price}",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "${p.status}",
  },
`;
}

out += `];

export const foundationsProducts: Product[] = [
  {
    slug: "foundations-kit",
    name: "The Foundations Kit",
    category: "foundations",
    categoryLabel: "The Foundations",
    description:
      "Four compounds studied together — metabolic, repair, cognitive, cellular. One stack under the mark. Includes GLP3-R, KLOW, Adamax, and MOTS-C.",
    amount: "Kit",
    price: "Unavailable",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
];

export const atelierProducts: Product[] = [
  { slug: "monogram-tee", name: "The Monogram Tee", category: "atelier", categoryLabel: "Row I", description: "Cream · Chest monogram", amount: "—", price: "Unavailable", lotStatus: "—", certificateAvailable: false, status: "available" },
  { slug: "emblem-tee", name: "The Emblem Tee", category: "atelier", categoryLabel: "Row I", description: "Cream · Oversized emblem", amount: "—", price: "Unavailable", lotStatus: "—", certificateAvailable: false, status: "available" },
  { slug: "wordmark-tee", name: "The Wordmark Tee", category: "atelier", categoryLabel: "Row I", description: "Cream · Gold wordmark", amount: "—", price: "Unavailable", lotStatus: "—", certificateAvailable: false, status: "available" },
  { slug: "crest-tee", name: "The Crest Tee", category: "atelier", categoryLabel: "Row I", description: "Cream · Gold crest", amount: "—", price: "Unavailable", lotStatus: "—", certificateAvailable: false, status: "available" },
  { slug: "box-logo-tee", name: "The Box-Logo Tee", category: "atelier", categoryLabel: "Row I", description: "Cream · Framed wordmark", amount: "—", price: "Unavailable", lotStatus: "—", certificateAvailable: false, status: "available" },
  { slug: "monogram-hoodie", name: "The Monogram Hoodie", category: "atelier", categoryLabel: "Row II", description: "Heavyweight · Gold embroidery", amount: "—", price: "Unavailable", lotStatus: "—", certificateAvailable: false, status: "available" },
  { slug: "wordmark-hoodie", name: "The Wordmark Hoodie", category: "atelier", categoryLabel: "Row II", description: "Heavyweight · Back print", amount: "—", price: "Unavailable", lotStatus: "—", certificateAvailable: false, status: "available" },
  { slug: "crest-hoodie", name: "The Crest Hoodie", category: "atelier", categoryLabel: "Row II", description: "Heavyweight · Crest back", amount: "—", price: "Unavailable", lotStatus: "—", certificateAvailable: false, status: "available" },
  { slug: "beanie", name: "The Beanie", category: "atelier", categoryLabel: "Row III", description: "Ribbed knit · Gold monogram", amount: "—", price: "Unavailable", lotStatus: "—", certificateAvailable: false, status: "available" },
  { slug: "duffel", name: "The Duffel", category: "atelier", categoryLabel: "Row III", description: "Canvas · Gold hardware", amount: "—", price: "Unavailable", lotStatus: "—", certificateAvailable: false, status: "available" },
  { slug: "tumbler", name: "The Tumbler", category: "atelier", categoryLabel: "Row III", description: "White steel · Gold base", amount: "—", price: "Unavailable", lotStatus: "—", certificateAvailable: false, status: "available" },
  { slug: "shaker", name: "The Shaker", category: "atelier", categoryLabel: "Row III", description: "White steel · Gold lid", amount: "—", price: "Unavailable", lotStatus: "—", certificateAvailable: false, status: "available" },
  { slug: "mug", name: "The Mug", category: "atelier", categoryLabel: "Row III", description: "Porcelain · Gold mark", amount: "—", price: "Unavailable", lotStatus: "—", certificateAvailable: false, status: "available" },
  { slug: "towel", name: "The Towel", category: "atelier", categoryLabel: "Row III", description: "Cotton · Gold band", amount: "—", price: "Unavailable", lotStatus: "—", certificateAvailable: false, status: "available" },
  { slug: "umbrella", name: "The Umbrella", category: "atelier", categoryLabel: "Row III", description: "Cream · Gold mark", amount: "—", price: "Unavailable", lotStatus: "—", certificateAvailable: false, status: "available" },
  { slug: "challenge-coin", name: "The Challenge Coin", category: "atelier", categoryLabel: "Row III", description: "Struck gold · Numbered", amount: "—", price: "Unavailable", lotStatus: "—", certificateAvailable: false, status: "available" },
];

export const allProducts: Product[] = [
  ...collectionProducts,
  ...foundationsProducts,
  ...atelierProducts,
];

export function resolveProductSlug(slug: string): string {
  return productSlugAliases[slug] ?? slug;
}

export function getProductBySlug(slug: string): Product | undefined {
  const resolved = resolveProductSlug(slug);
  return allProducts.find((p) => p.slug === resolved);
}

export function getFeaturedCollectionProducts(): Product[] {
  return featuredCollectionSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => Boolean(p));
}

export interface CertificateRecord {
  lotId: string;
  compound: string;
  status: "documented" | "unavailable";
  testedDate: string | null;
  assay: string | null;
  certificateUrl: string | null;
  storage: string | null;
}

/** Populated only with house-verified lots — never invent records. */
export const certificateDatabase: CertificateRecord[] = [];

export function lookupCertificate(lotId: string): CertificateRecord | null {
  const normalized = lotId.trim().toUpperCase();
  return (
    certificateDatabase.find((c) => c.lotId.toUpperCase() === normalized) ??
    null
  );
}

/** True only when a verified certificate record exists for this product. */
export function productHasCertificate(product: Product): boolean {
  if (!product.certificateAvailable) return false;
  return certificateDatabase.some(
    (c) =>
      c.status === "documented" &&
      c.compound.toLowerCase() === product.name.toLowerCase()
  );
}
`;

fs.writeFileSync(path.join(__dirname, "../src/data/products.ts"), out);
const cats = {};
products.forEach((p) => {
  cats[p.categoryLabel] = (cats[p.categoryLabel] || 0) + 1;
});
console.log("wrote", products.length, "products", cats);
