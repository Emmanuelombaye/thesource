import Link from "next/link";
import type { Product } from "@/data/products";
import { productHasCertificate } from "@/data/products";
import ProductImage from "./ProductImage";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  variant?: "grid" | "carousel" | "homepage";
}

function availabilityLabel(product: Product): string {
  if (product.status === "sold_out") return "Sold Out";
  if (productHasCertificate(product)) return "Documented";
  return "Available";
}

export default function ProductCard({ product, variant = "grid" }: ProductCardProps) {
  const isSoldOut = product.status === "sold_out";
  const isCollection = product.category === "collection";
  const isAtelier = product.category === "atelier";
  const hasCertificate = productHasCertificate(product);
  const isHomepage = variant === "homepage";
  const isCarousel = variant === "carousel";
  const showStatus = !isHomepage && !isCarousel;
  const showPrice = !(isCarousel && isAtelier);

  return (
    <article className={`${styles.card} ${styles[variant]} ${isSoldOut ? styles.soldOut : ""}`}>
      <Link href={`/product/${product.slug}`} className={styles.link}>
        <div className={styles.visual}>
          <ProductImage product={product} />
        </div>

        <div className={styles.meta}>
          {showStatus && (
            <p className={`${styles.status} ${isSoldOut ? styles.statusSoldOut : hasCertificate ? styles.statusGold : ""}`}>
              {availabilityLabel(product)}
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

          {isCollection && !isHomepage && (
            <>
              <p className={styles.lot}>Lot · {product.lotStatus}</p>
              <p className={hasCertificate ? styles.certAvailable : styles.certUnavailable}>
                {hasCertificate ? "Certificate Available" : "Certificate · Unavailable"}
              </p>
            </>
          )}

          {!isCollection && (
            <p className={styles.desc}>{product.description}</p>
          )}

          <span className={styles.view}>
            {isHomepage || !isSoldOut ? "View →" : "Details →"}
          </span>
        </div>
      </Link>
    </article>
  );
}
