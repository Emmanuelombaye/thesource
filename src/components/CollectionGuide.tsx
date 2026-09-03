"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Product } from "@/data/products";
import {
  collectionCategories,
  collectionFilters,
  getCollectionCategory,
  normalizeCollectionCategory,
} from "@/lib/collectionCategories";
import ProductCard from "./ProductCard";
import StateMessage from "./StateMessage";
import styles from "./CollectionGuide.module.css";

interface CollectionGuideProps {
  products: Product[];
  initialCategory?: string;
}

export default function CollectionGuide({ products, initialCategory }: CollectionGuideProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramCategory = searchParams.get("category");
  const [active, setActive] = useState(
    normalizeCollectionCategory(initialCategory ?? paramCategory)
  );

  useEffect(() => {
    setActive(normalizeCollectionCategory(initialCategory ?? paramCategory));
  }, [initialCategory, paramCategory]);

  const sorted = useMemo(
    () => [...products].sort((a, b) => a.name.localeCompare(b.name)),
    [products]
  );

  const filtered = useMemo(() => {
    if (active === "All") return sorted;
    return sorted.filter((p) => p.categoryLabel === active);
  }, [active, sorted]);

  const categoryMeta = active !== "All" ? getCollectionCategory(active) : undefined;

  function selectCategory(filter: string) {
    setActive(filter);
    const params = new URLSearchParams(searchParams.toString());
    if (filter === "All") {
      params.delete("category");
    } else {
      params.set("category", filter);
    }
    const query = params.toString();
    router.replace(query ? `/collection?${query}` : "/collection", { scroll: false });
  }

  return (
    <>
      <div className={styles.guide} role="tablist" aria-label="Filter by category">
        {collectionFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={active === filter}
            className={`${styles.chip} ${active === filter ? styles.chipActive : ""}`}
            onClick={() => selectCategory(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {categoryMeta && (
        <div className={styles.categoryIntro} id="category-intro">
          <p className="label label-gold">{categoryMeta.label}</p>
          <p>{categoryMeta.intro}</p>
          <p className={styles.categoryCount}>
            {filtered.length} {filtered.length === 1 ? "compound" : "compounds"} in this category
          </p>
        </div>
      )}

      {!categoryMeta && (
        <div className={styles.categoryIntro}>
          <p className="label label-gold">Guided Selection</p>
          <p>
            Select a research focus above — metabolic, recovery, longevity, radiance, growth, stacks, or research — to
            view compounds held to one standard within that category.
          </p>
        </div>
      )}

      <div className={styles.grid} id="collection">
        {filtered.map((product, index) => (
          <ProductCard key={product.slug} product={product} priority={index < 3} />
        ))}
      </div>

      {filtered.length === 0 && (
        <StateMessage
          type="empty"
          title="No compounds in this category"
          message="Try another research focus, or view the full Collection."
          actionLabel="View All"
          actionHref="/collection"
        />
      )}
    </>
  );
}

export function CollectionCategoryLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.categoryLinks} ${className}`.trim()}>
      {collectionCategories.map((category) => (
        <a
          key={category.id}
          href={`/collection?category=${category.id}#category-intro`}
          className={styles.categoryLink}
        >
          {category.label}
        </a>
      ))}
    </div>
  );
}
