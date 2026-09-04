import type { Product } from "@/data/products";
import Monogram from "./Monogram";
import styles from "./VialVisual.module.css";

interface VialVisualProps {
  product?: Product;
  size?: "sm" | "md" | "lg";
}

function NameBlock({ name }: { name?: string }) {
  if (!name) return <span className={styles.name}>—</span>;

  // Split at "/" so blends never clip mid-word (e.g. Ipamorelin).
  if (name.includes("/")) {
    const [left, ...rest] = name.split("/");
    const right = rest.join("/").trim();
    return (
      <span className={`${styles.name} ${styles.nameStack}`}>
        <span className={styles.nameLine}>{left.trim()}/</span>
        <span className={styles.nameLine}>{right}</span>
      </span>
    );
  }

  const long = name.length > 22;
  return (
    <span className={`${styles.name} ${long ? styles.nameLong : ""}`}>
      {name}
    </span>
  );
}

/** Neutral label plate when no exact product photo exists — full name always visible. */
export default function VialVisual({ product, size = "md" }: VialVisualProps) {
  const monogramSize = size === "lg" ? 24 : size === "sm" ? 18 : 20;

  return (
    <div className={`${styles.plate} ${styles[size]}`} aria-hidden="true">
      <div className={styles.frame} />
      <div className={styles.labelCard}>
        <span className={styles.mark}>
          <Monogram mode="monogram" variant="gold" size={monogramSize} />
        </span>
        <NameBlock name={product?.name} />
        <span className={styles.strength}>{product?.amount ?? "—"}</span>
        <span className={styles.ruo}>Research Use Only</span>
      </div>
    </div>
  );
}
