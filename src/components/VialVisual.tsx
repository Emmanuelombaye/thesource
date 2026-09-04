import type { Product } from "@/data/products";
import Monogram from "./Monogram";
import styles from "./VialVisual.module.css";

interface VialVisualProps {
  product?: Product;
  size?: "sm" | "md" | "lg";
}

/** Break blend names into short full lines — never mid-word. */
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

  // Long single names: break after closing paren if present
  const paren = name.match(/^(.+\))\s*(.+)$/);
  if (paren && name.length > 18) {
    return [paren[1], paren[2]];
  }

  return [name];
}

function NameBlock({ name }: { name?: string }) {
  const lines = nameLines(name);
  const compact = lines.join("").length > 24;

  return (
    <span
      className={`${styles.name} ${styles.nameStack} ${compact ? styles.nameCompact : ""}`}
    >
      {lines.map((line) => (
        <span key={line} className={styles.nameLine}>
          {line}
        </span>
      ))}
    </span>
  );
}

/** Neutral label plate when no exact product photo exists — full name always visible. */
export default function VialVisual({ product, size = "md" }: VialVisualProps) {
  const monogramSize = size === "lg" ? 22 : 18;

  return (
    <div className={`${styles.plate} ${styles[size]}`} aria-hidden="true">
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
