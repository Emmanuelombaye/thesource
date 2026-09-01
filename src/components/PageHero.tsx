import styles from "./PageHero.module.css";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  align?: "center" | "left";
}

export default function PageHero({
  label,
  title,
  subtitle,
  centered = true,
  dark = false,
  align,
}: PageHeroProps) {
  const isCentered = align ? align === "center" : centered;
  return (
    <section
      className={`${styles.hero} ${isCentered ? styles.centered : styles.left} ${dark ? styles.dark : ""}`}
    >
      <div className="container fade-in">
        {label && <p className="label label-gold">{label}</p>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
