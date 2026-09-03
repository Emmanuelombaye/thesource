export interface CollectionCategory {
  id: string;
  label: string;
  intro: string;
}

/** Navigation filters (Immortals structure) — not clinical claims. */
export const collectionCategories: CollectionCategory[] = [
  {
    id: "Metabolic",
    label: "Metabolic",
    intro:
      "Materials listed under this focus. Open any card for amount, price, lot status, and certificate status.",
  },
  {
    id: "Recovery",
    label: "Recovery",
    intro:
      "Materials listed under this focus. Open any card for amount, price, lot status, and certificate status.",
  },
  {
    id: "Longevity",
    label: "Longevity",
    intro:
      "Materials listed under this focus. Open any card for amount, price, lot status, and certificate status.",
  },
  {
    id: "Radiance",
    label: "Radiance",
    intro:
      "Materials listed under this focus. Open any card for amount, price, lot status, and certificate status.",
  },
  {
    id: "Growth",
    label: "Growth",
    intro:
      "Materials listed under this focus. Open any card for amount, price, lot status, and certificate status.",
  },
  {
    id: "Stacks",
    label: "Stacks",
    intro:
      "Bundles and stacks from the public catalog. Open any card for amount, price, lot status, and certificate status.",
  },
  {
    id: "Research",
    label: "Research",
    intro:
      "Additional materials from The Collection. Open any card for amount, price, lot status, and certificate status.",
  },
];

export const collectionFilters = ["All", ...collectionCategories.map((c) => c.id)];

export function getCollectionCategory(id: string): CollectionCategory | undefined {
  return collectionCategories.find((c) => c.id === id);
}

export function normalizeCollectionCategory(value?: string | null): string {
  if (!value) return "All";
  return collectionFilters.includes(value) ? value : "All";
}
