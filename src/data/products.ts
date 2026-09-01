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

/** Verified from thesource.gold — March 2026 */
export const collectionProducts: Product[] = [
  {
    slug: "glp3-r",
    name: "GLP3-R",
    category: "collection",
    categoryLabel: "Metabolic",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "30mg",
    price: "$200.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "bpc-157",
    name: "BPC-157",
    category: "collection",
    categoryLabel: "Recovery",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "20mg",
    price: "$90.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "tb500",
    name: "TB500",
    category: "collection",
    categoryLabel: "Recovery",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "20mg",
    price: "$140.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    category: "collection",
    categoryLabel: "Longevity",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "1000mg",
    price: "$155.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "glow",
    name: "GLOW",
    category: "collection",
    categoryLabel: "Radiance",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "70mg",
    price: "$130.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "klow",
    name: "KLOW",
    category: "collection",
    categoryLabel: "Radiance",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "80mg",
    price: "$155.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "mots-c",
    name: "MOTS-C",
    category: "collection",
    categoryLabel: "Longevity",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "40mg",
    price: "$150.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    category: "collection",
    categoryLabel: "Growth",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "20mg",
    price: "$130.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "sold_out",
  },
];

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

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
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
