import type { Product } from "@/data/products";
import Monogram from "./Monogram";
import styles from "./VialVisual.module.css";

interface VialVisualProps {
  product?: Product;
  size?: "sm" | "md" | "lg";
}

export default function VialVisual({ product, size = "md" }: VialVisualProps) {
  const monogramSize = size === "lg" ? 20 : size === "sm" ? 12 : 16;

  return (
    <div className={`${styles.vial} ${styles[size]}`} aria-hidden="true">
      <div className={styles.box}>
        <div className={styles.boxLid}>
          <div className={styles.boxMark}>
            <Monogram size={monogramSize} />
            <span className={styles.boxName}>THE SOURCE</span>
            <span className={styles.boxLine}>Precision. Purity. Performance.</span>
          </div>
        </div>
        <div className={styles.boxClasp} />
      </div>
      <div className={styles.vialBody}>
        <div className={styles.cap} />
        <div className={styles.glass}>
          <div className={styles.label}>
            <span className={styles.labelMark}>
              <Monogram size={monogramSize - 2} />
            </span>
            <span className={styles.labelName}>{product?.name ?? "—"}</span>
            <span className={styles.labelStrength}>
              {product?.amount ?? "—"}
            </span>
            <span className={styles.labelRuo}>Research Use Only</span>
          </div>
        </div>
      </div>
      <div className={styles.surface} />
    </div>
  );
}
