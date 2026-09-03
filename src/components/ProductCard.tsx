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

/** PDF p.18 — AVAILABLE / DOCUMENTED above compound name */
function cardStatusLabel(product: Product): string {
  if (product.status === "sold_out") return "Sold Out";
  if (productHasCertificate(product)) return "Documented";
  return "Available";
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
  const statusLabel = cardStatusLabel(product);

  return (
    <article
      className={`${styles.card} ${styles[variant]} ${isCollectionGrid ? styles.collectionGrid : ""} ${isCollection ? styles.collectionCard : ""} ${isSoldOut ? styles.soldOut : ""}`}
      data-carousel-card={isCarousel ? "" : undefined}
    >
      <Link href={`/product/${product.slug}`} className={styles.link}>
        <div className={`${styles.visual} ${isCollection ? styles.collectionVisual : ""}`}>
          {isCollectionGrid && product.categoryLabel && (
            <span className={styles.badge}>{product.categoryLabel}</span>
          )}
          <ProductImage product={product} priority={priority} />
        </div>

        <div className={styles.meta}>
          {isCollectionGrid ? (
            <>
              <p
                className={`${styles.cardStatus} ${isSoldOut ? styles.cardStatusMuted : hasCertificate ? styles.cardStatusGold : ""}`}
              >
                {statusLabel}
              </p>
              <h3 className={styles.name}>{product.name}</h3>
              {showPrice && (
                <div className={styles.priceRow}>
                  <span className={styles.amount}>{product.amount}</span>
                  <span className={styles.price}>{product.price}</span>
                </div>
              )}
              <div className={styles.proofRow}>
                <span>Lot · {product.lotStatus}</span>
                <span className={hasCertificate ? styles.certAvailable : styles.certMuted}>
                  {hasCertificate ? "Certificate Available" : "Certificate · Unavailable"}
                </span>
              </div>
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
