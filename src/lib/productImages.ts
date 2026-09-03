/** Exact product photos only — never reuse another compound’s label art. */
export const productImages: Record<string, string> = {
  "glp3-r-30mg": "/products-ts/glp3-r-30mg.webp",
  "bpc-157-20mg": "/products-ts/bpc-157-20mg.webp",
  "tb500-20mg": "/products-ts/tb500-20mg.webp",
  "nad-1000mg": "/products-ts/nad-1000mg.webp",
  "glow-70mg": "/products-ts/glow-70mg.webp",
  "klow-80mg": "/products-ts/klow-80mg.webp",
  "mots-c-40mg": "/products-ts/mots-c-40mg.webp",
  "tesamorelin-20mg": "/products-ts/tesamorelin-20mg.webp",
  "foundations-kit": "/brand/kit-open.jpg",
  "monogram-tee": "/atelier/tee-1.png",
  "emblem-tee": "/atelier/tee-2.png",
  "wordmark-tee": "/atelier/tee-3.png",
  "crest-tee": "/atelier/tee-4.png",
  "box-logo-tee": "/atelier/tee-6.png",
  "monogram-hoodie": "/atelier/hoodie-1.png",
  "wordmark-hoodie": "/atelier/hoodie-2.png",
  "crest-hoodie": "/atelier/hoodie-3.png",
  beanie: "/atelier/beanie.png",
  duffel: "/atelier/obj-duffel.png",
  tumbler: "/atelier/obj-tumbler.png",
  shaker: "/atelier/obj-shaker.png",
  mug: "/atelier/obj-mug.png",
  towel: "/atelier/obj-towel.png",
  umbrella: "/atelier/obj-umbrella.png",
  "challenge-coin": "/atelier/obj-coin.png",
};

/** Legacy short slugs → the exact dose photo we hold for that compound. */
const legacyAliases: Record<string, string> = {
  "glp3-r": "/products-ts/glp3-r-30mg.webp",
  "bpc-157": "/products-ts/bpc-157-20mg.webp",
  tb500: "/products-ts/tb500-20mg.webp",
  "nad-plus": "/products-ts/nad-1000mg.webp",
  glow: "/products-ts/glow-70mg.webp",
  klow: "/products-ts/klow-80mg.webp",
  "mots-c": "/products-ts/mots-c-40mg.webp",
  tesamorelin: "/products-ts/tesamorelin-20mg.webp",
};

export function getProductImage(slug: string): string | undefined {
  return productImages[slug] ?? legacyAliases[slug];
}
