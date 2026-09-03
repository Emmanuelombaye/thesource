/** Synced from thesource.gold public catalog — name, amount, price, availability only.
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
export const featuredCollectionSlugs = [
  "glp3-r-30mg",
  "bpc-157-20mg",
  "tb500-20mg",
  "nad-1000mg",
  "glow-70mg",
  "klow-80mg",
  "mots-c-40mg",
  "tesamorelin-20mg"
] as const;

/** Legacy short slugs → live dose-specific slugs */
export const productSlugAliases: Record<string, string> = {
  "glp3-r": "glp3-r-30mg",
  "bpc-157": "bpc-157-20mg",
  "tb500": "tb500-20mg",
  "nad-plus": "nad-1000mg",
  "glow": "glow-70mg",
  "klow": "klow-80mg",
  "mots-c": "mots-c-40mg",
  "tesamorelin": "tesamorelin-20mg",
  "adamax": "adamax-30mg"
};

export const collectionProducts: Product[] = [
  {
    slug: "5-amino-1mq-50mg",
    name: "5-Amino 1MQ",
    category: "collection",
    categoryLabel: "Metabolic",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "50mg",
    price: "$75.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "adamax-30mg",
    name: "Adamax",
    category: "collection",
    categoryLabel: "Growth",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "30mg",
    price: "$115.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "adamax-30mg-long-lasting-spray-kit",
    name: "Adamax Nasal",
    category: "collection",
    categoryLabel: "Growth",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "30mg",
    price: "$150.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "the-radiant-bundle",
    name: "Anti-Inflammation Stack",
    category: "collection",
    categoryLabel: "Stacks",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "Kit",
    price: "$490.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "ara-290-10mg",
    name: "ARA-290",
    category: "collection",
    categoryLabel: "Recovery",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$60.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "bpc-157-10mg",
    name: "BPC-157",
    category: "collection",
    categoryLabel: "Recovery",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$60.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "bpc-157-20mg",
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
    slug: "bpc-157-tb-500-bundle",
    name: "BPC-157 + TB-500 Bundle",
    category: "collection",
    categoryLabel: "Stacks",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$120.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "bpc-157-20mg-tb-500-20mg-bundle",
    name: "BPC-157 + TB-500 Bundle",
    category: "collection",
    categoryLabel: "Stacks",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "20mg",
    price: "$180.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "bpc-tb500-blend-10mg-10mg",
    name: "BPC/TB500 Blend",
    category: "collection",
    categoryLabel: "Recovery",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg / 10mg",
    price: "$140.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "bpc-tb500-blend-5mg-5mg",
    name: "BPC/TB500 Blend",
    category: "collection",
    categoryLabel: "Recovery",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "5mg / 5mg",
    price: "$90.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "cagriniltide-10mg",
    name: "Cagrilintide",
    category: "collection",
    categoryLabel: "Metabolic",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$115.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "cjc-no-dac-5mg",
    name: "CJC (no DAC)",
    category: "collection",
    categoryLabel: "Growth",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "5mg",
    price: "$50.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "cjc-no-dac-ipamorelin-5mg-5mg",
    name: "CJC (no DAC)/Ipamorelin",
    category: "collection",
    categoryLabel: "Growth",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "5mg / 5mg",
    price: "$75.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "dsip-10mg",
    name: "DSIP",
    category: "collection",
    categoryLabel: "Research",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$60.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "epithalon-40mg",
    name: "Epithalon",
    category: "collection",
    categoryLabel: "Longevity",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "40mg",
    price: "$155.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "foxo4-10mg",
    name: "FOXO4",
    category: "collection",
    categoryLabel: "Longevity",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$180.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "ghk-cu-100mg",
    name: "GHK-CU",
    category: "collection",
    categoryLabel: "Radiance",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "100mg",
    price: "$80.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "glow-70mg",
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
    slug: "glp2-t-10mg",
    name: "GLP2-T",
    category: "collection",
    categoryLabel: "Metabolic",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$105.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "glp2-t-20mg",
    name: "GLP2-T",
    category: "collection",
    categoryLabel: "Metabolic",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "20mg",
    price: "$150.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "glp2-t-30mg",
    name: "GLP2-T",
    category: "collection",
    categoryLabel: "Metabolic",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "30mg",
    price: "$180.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "glp2-t-60mg",
    name: "GLP2-T",
    category: "collection",
    categoryLabel: "Metabolic",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "60mg",
    price: "$260.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "glp3-r-10mg",
    name: "GLP3-R",
    category: "collection",
    categoryLabel: "Metabolic",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$110.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "glp3-r-20mg",
    name: "GLP3-R",
    category: "collection",
    categoryLabel: "Metabolic",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "20mg",
    price: "$160.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "glp3-r-30mg",
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
    slug: "glp3-r-60mg",
    name: "GLP3-R",
    category: "collection",
    categoryLabel: "Metabolic",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "60mg",
    price: "$280.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "glutathione-1500mg",
    name: "Glutathione",
    category: "collection",
    categoryLabel: "Research",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "1500mg",
    price: "$110.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "igf-1-lr3-1mg",
    name: "IGF-1 LR3",
    category: "collection",
    categoryLabel: "Growth",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "1mg",
    price: "$90.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "ipamorelin-10mg",
    name: "Ipamorelin",
    category: "collection",
    categoryLabel: "Growth",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$75.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "kisspeptin-10mg",
    name: "Kisspeptin",
    category: "collection",
    categoryLabel: "Research",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$55.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "klow-80mg",
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
    slug: "kpv-10mg",
    name: "KPV",
    category: "collection",
    categoryLabel: "Recovery",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$75.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "ll-37-5mg",
    name: "LL-37",
    category: "collection",
    categoryLabel: "Recovery",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "5mg",
    price: "$75.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "melanotan-2-10mg",
    name: "Melanotan 2",
    category: "collection",
    categoryLabel: "Research",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$50.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "mots-c-40mg",
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
    slug: "mots-c-40mg-ss-31-50mg-bundle",
    name: "MOTS-C + SS-31 Bundle",
    category: "collection",
    categoryLabel: "Stacks",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "40mg",
    price: "$255.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "n-acetyl-selank-amidate-30mg-spray-kit",
    name: "N-Acetyl Selank Amidate Nasal",
    category: "collection",
    categoryLabel: "Growth",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "30mg",
    price: "$150.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "nad-1000mg",
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
    slug: "oxytocin-10mg",
    name: "Oxytocin",
    category: "collection",
    categoryLabel: "Research",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$50.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "pt-141-10mg",
    name: "PT-141",
    category: "collection",
    categoryLabel: "Growth",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$50.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "selank-10mg",
    name: "Selank",
    category: "collection",
    categoryLabel: "Growth",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$50.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "semax-10mg",
    name: "Semax",
    category: "collection",
    categoryLabel: "Growth",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$50.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "sermorelin-10mg",
    name: "Sermorelin",
    category: "collection",
    categoryLabel: "Growth",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$80.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "ss-31-50mg",
    name: "SS-31",
    category: "collection",
    categoryLabel: "Recovery",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "50mg",
    price: "$155.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "tb500-10mg",
    name: "TB500",
    category: "collection",
    categoryLabel: "Recovery",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$90.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "tb500-20mg",
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
    slug: "tesamorelin-10mg",
    name: "Tesamorelin",
    category: "collection",
    categoryLabel: "Growth",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$80.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "tesamorelin-20mg",
    name: "Tesamorelin",
    category: "collection",
    categoryLabel: "Growth",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "20mg",
    price: "$130.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "tesamorelin-10mg-ipamorelin-10mg-bundle",
    name: "Tesamorelin + Ipamorelin Bundle",
    category: "collection",
    categoryLabel: "Stacks",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$125.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "tesamorelin-ipamorelin-blend-11mg-6mg",
    name: "Tesamorelin/Ipamorelin Blend",
    category: "collection",
    categoryLabel: "Growth",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "11mg / 6mg",
    price: "$135.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "the-freedom-stack",
    name: "The Freedom Stack",
    category: "collection",
    categoryLabel: "Stacks",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "Kit",
    price: "$665.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "the-grand-slam-bundle",
    name: "The Grand Slam Bundle",
    category: "collection",
    categoryLabel: "Stacks",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "Kit",
    price: "$330.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "the-long-shot",
    name: "The Long Shot",
    category: "collection",
    categoryLabel: "Stacks",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "Kit",
    price: "$450.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "thy-alpha-1-10mg",
    name: "Thy Alpha 1",
    category: "collection",
    categoryLabel: "Recovery",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$80.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
  },
  {
    slug: "vip-10mg",
    name: "VIP",
    category: "collection",
    categoryLabel: "Recovery",
    description:
      "Research compound from The Collection. Held to one specification, run to run.",
    amount: "10mg",
    price: "$75.00",
    lotStatus: "Unavailable",
    certificateAvailable: false,
    status: "available",
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
