import type { Product } from "@/data/products";
import Monogram from "./Monogram";
import styles from "./VialVisual.module.css";

interface VialVisualProps {
  product?: Product;
  size?: "sm" | "md" | "lg";
}

function nameLines(name?: string): string[] {
  if (!name) return ["—"];

  if (name.includes("/")) {
    const [left, ...rest] = name.split("/");
    const right = rest.join("/").trim();
    const blend = right.match(/^(.*?)\s+(Blend)$/i);
    if (blend) {
      return [`${left.trim()}/`, blend[1].trim(), blend[2]];
    }
    return [`${left.trim()}/`, right];
  }

  const paren = name.match(/^(.+\))\s*(.+)$/);
  if (paren && name.length > 18) {
    return [paren[1], paren[2]];
  }

  return [name];
}

function NameBlock({ name }: { name?: string }) {
  const lines = nameLines(name);
  const compact = lines.join("").length > 20;

  return (
    <span className={`${styles.name} ${styles.nameStack} ${compact ? styles.nameCompact : ""}`}>
      {lines.map((line) => (
        <span key={line} className={styles.nameLine}>
          {line}
        </span>
      ))}
    </span>
  );
}

/** Quiet placeholder when no exact product photo exists. */
export default function VialVisual({ product, size = "md" }: VialVisualProps) {
  const monogramSize = size === "lg" ? 28 : 20;

  return (
    <div className={`${styles.plate} ${styles[size]}`} aria-hidden="true">
      <Monogram mode="monogram" variant="gold" size={monogramSize} />
      <NameBlock name={product?.name} />
      {product?.amount && product.amount !== "—" && (
        <span className={styles.strength}>{product.amount}</span>
      )}
    </div>
  );
}
