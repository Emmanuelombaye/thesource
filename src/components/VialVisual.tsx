import type { Product } from "@/data/products";
import Monogram from "./Monogram";
import styles from "./VialVisual.module.css";

interface VialVisualProps {
  product?: Product;
  size?: "sm" | "md" | "lg";
}

/** Neutral label plate when no exact product photo exists — name/amount match the card. */
export default function VialVisual({ product, size = "md" }: VialVisualProps) {
  const monogramSize = size === "lg" ? 28 : size === "sm" ? 22 : 24;

  return (
    <div className={`${styles.plate} ${styles[size]}`} aria-hidden="true">
      <div className={styles.frame} />
      <div className={styles.labelCard}>
        <span className={styles.mark}>
          <Monogram mode="monogram" variant="gold" size={monogramSize} />
        </span>
        <span className={styles.name}>{product?.name ?? "—"}</span>
        <span className={styles.strength}>{product?.amount ?? "—"}</span>
        <span className={styles.ruo}>Research Use Only</span>
      </div>
    </div>
  );
}
