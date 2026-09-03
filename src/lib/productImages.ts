/** Verified media paths from thesource.gold */
export const productImages: Record<string, string> = {
  "glp3-r": "/products-ts/glp3-r-30mg.png",
  "glp3-r-10mg": "/products-ts/glp3-r-30mg.png",
  "glp3-r-20mg": "/products-ts/glp3-r-30mg.png",
  "glp3-r-30mg": "/products-ts/glp3-r-30mg.png",
  "glp3-r-60mg": "/products-ts/glp3-r-30mg.png",
  "bpc-157": "/products-ts/bpc-157-20mg.png",
  "bpc-157-10mg": "/products-ts/bpc-157-20mg.png",
  "bpc-157-20mg": "/products-ts/bpc-157-20mg.png",
  tb500: "/products-ts/tb500-20mg.png",
  "tb500-10mg": "/products-ts/tb500-20mg.png",
  "tb500-20mg": "/products-ts/tb500-20mg.png",
  "nad-plus": "/products-ts/nad-1000mg.png",
  "nad-1000mg": "/products-ts/nad-1000mg.png",
  glow: "/products-ts/glow-70mg.png",
  "glow-70mg": "/products-ts/glow-70mg.png",
  klow: "/products-ts/klow-80mg.png",
  "klow-80mg": "/products-ts/klow-80mg.png",
  "mots-c": "/products-ts/mots-c-40mg.png",
  "mots-c-40mg": "/products-ts/mots-c-40mg.png",
  tesamorelin: "/products-ts/tesamorelin-20mg.png",
  "tesamorelin-10mg": "/products-ts/tesamorelin-20mg.png",
  "tesamorelin-20mg": "/products-ts/tesamorelin-20mg.png",
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

const familyImages: [RegExp, string][] = [
  [/^glp3-r/, "/products-ts/glp3-r-30mg.png"],
  [/^glp2-t/, "/products-ts/glp3-r-30mg.png"],
  [/^bpc/, "/products-ts/bpc-157-20mg.png"],
  [/^tb500/, "/products-ts/tb500-20mg.png"],
  [/^nad/, "/products-ts/nad-1000mg.png"],
  [/^glow/, "/products-ts/glow-70mg.png"],
  [/^klow/, "/products-ts/klow-80mg.png"],
  [/^mots-c/, "/products-ts/mots-c-40mg.png"],
  [/^tesamorelin/, "/products-ts/tesamorelin-20mg.png"],
];

export function getProductImage(slug: string): string | undefined {
  if (productImages[slug]) return productImages[slug];
  for (const [re, src] of familyImages) {
    if (re.test(slug)) return src;
  }
  return undefined;
}
