import type { Product } from "@/data/products";
import Monogram from "./Monogram";
import styles from "./VialVisual.module.css";

interface VialVisualProps {
  product?: Product;
  size?: "sm" | "md" | "lg";
}

/** Allow long compound names to wrap at / and spaces without clipping. */
function displayName(name?: string): string {
  if (!name) return "—";
  return name.replace(/\//g, "/\u200B").replace(/·/g, "·\u200B");
}

function nameClass(name?: string): string {
  const len = name?.length ?? 0;
  if (len > 28) return styles.nameLong;
  if (len > 18) return styles.nameMid;
  return "";
}

/** Neutral label plate when no exact product photo exists — name/amount match the card. */
export default function VialVisual({ product, size = "md" }: VialVisualProps) {
  const monogramSize = size === "lg" ? 26 : size === "sm" ? 20 : 22;
  const name = product?.name;

  return (
    <div className={`${styles.plate} ${styles[size]}`} aria-hidden="true">
      <div className={styles.frame} />
      <div className={styles.labelCard}>
        <span className={styles.mark}>
          <Monogram mode="monogram" variant="gold" size={monogramSize} />
        </span>
        <span className={`${styles.name} ${nameClass(name)}`}>
          {displayName(name)}
        </span>
        <span className={styles.strength}>{product?.amount ?? "—"}</span>
        <span className={styles.ruo}>Research Use Only</span>
      </div>
    </div>
  );
}
