export interface CollectionCategory {
  id: string;
  label: string;
  intro: string;
}

export const collectionCategories: CollectionCategory[] = [
  {
    id: "Metabolic",
    label: "Metabolic",
    intro:
      "Research compounds held to one master standard for metabolic pathway studies in qualified laboratory settings.",
  },
  {
    id: "Recovery",
    label: "Recovery",
    intro:
      "Recovery-category materials from The Collection — same vial, same cap, same specification run to run.",
  },
  {
    id: "Longevity",
    label: "Longevity",
    intro:
      "Longevity-category compounds supplied for laboratory research, with lot status and documentation on every card.",
  },
  {
    id: "Radiance",
    label: "Radiance",
    intro:
      "Radiance-category research materials — identity carried by the label, consistency as the first form of trust.",
  },
  {
    id: "Growth",
    label: "Growth",
    intro:
      "Growth-category compounds from The Collection. Open any card for amount, price, and certificate access.",
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
