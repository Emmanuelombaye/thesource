import Link from "next/link";
import type { Product } from "@/data/products";
import { productHasCertificate } from "@/data/products";
import ProductImage from "./ProductImage";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  variant?: "grid" | "carousel" | "homepage";
  priority?: boolean;
}

function availabilityLabel(product: Product): string {
  if (product.status === "sold_out") return "Sold Out";
  if (productHasCertificate(product)) return "Documented";
  return "Available";
}

function excerpt(text: string, max = 110): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

export default function ProductCard({ product, variant = "grid", priority = false }: ProductCardProps) {
  const isSoldOut = product.status === "sold_out";
  const isCollection = product.category === "collection";
  const isAtelier = product.category === "atelier";
  const hasCertificate = productHasCertificate(product);
  const isHomepage = variant === "homepage";
  const isCarousel = variant === "carousel";
  const isCollectionGrid = isCollection && variant === "grid";

  const showPrice = !(isCarousel && isAtelier);
  const statusLabel = availabilityLabel(product);

  return (
    <article
      className={`${styles.card} ${styles[variant]} ${isCollectionGrid ? styles.collectionGrid : ""} ${isCollection ? styles.collectionCard : ""} ${isSoldOut ? styles.soldOut : ""}`}
    >
      <Link href={`/product/${product.slug}`} className={styles.link}>
        <div className={`${styles.visual} ${isCollection ? styles.collectionVisual : ""}`}>
          {isCollectionGrid && product.categoryLabel && (
            <span className={styles.badge}>{product.categoryLabel}</span>
          )}
          {isCollectionGrid && (
            <span className={`${styles.statusFloat} ${hasCertificate ? styles.statusFloatGold : ""}`}>
              {statusLabel}
            </span>
          )}
          <ProductImage product={product} priority={priority} />
        </div>

        <div className={styles.meta}>
          {isCollectionGrid ? (
            <>
              <h3 className={styles.name}>{product.name}</h3>
              <p className={styles.excerpt}>{excerpt(product.description)}</p>
              {showPrice && (
                <div className={styles.facts}>
                  <span>{product.amount}</span>
                  <span className={styles.factSep} aria-hidden="true">·</span>
                  <span>{product.price}</span>
                  <span className={styles.factSep} aria-hidden="true">·</span>
                  <span className={hasCertificate ? styles.factGold : undefined}>
                    {hasCertificate ? "Certificate on file" : `Lot ${product.lotStatus}`}
                  </span>
                </div>
              )}
              <span className={styles.viewBtn}>
                {!isSoldOut ? "View Compound" : "View Details"}
              </span>
            </>
          ) : (
            <>
              {!isCarousel && (
                <p className={`${styles.status} ${isSoldOut ? styles.statusSoldOut : hasCertificate ? styles.statusGold : ""}`}>
                  {statusLabel}
                </p>
              )}
              {isHomepage && product.categoryLabel && (
                <p className={styles.category}>{product.categoryLabel}</p>
              )}
              <h3 className={styles.name}>{product.name}</h3>
              {showPrice && (
                <div className={styles.priceRow}>
                  <span className={styles.amount}>{product.amount}</span>
                  <span className={styles.price}>{product.price}</span>
                </div>
              )}
              {!isCollection && <p className={styles.desc}>{product.description}</p>}
              {!isHomepage && (
                <span className={styles.view}>{!isSoldOut ? "View →" : "Details →"}</span>
              )}
            </>
          )}
        </div>
      </Link>
    </article>
  );
}
