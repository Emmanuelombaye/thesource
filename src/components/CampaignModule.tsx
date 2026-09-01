import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./CampaignModule.module.css";

interface CampaignModuleProps {
  label: string;
  title: string;
  text: string;
  href: string;
  action: string;
  secondaryHref?: string;
  secondaryAction?: string;
  listItems?: string[];
  visual: ReactNode;
  reverse?: boolean;
  imageFill?: boolean;
}

export default function CampaignModule({
  label,
  title,
  text,
  href,
  action,
  secondaryHref,
  secondaryAction,
  listItems,
  visual,
  reverse = false,
  imageFill = false,
}: CampaignModuleProps) {
  const headingId = `campaign-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section className={styles.wrap} aria-labelledby={headingId}>
      <div className={`${styles.panel} ${reverse ? styles.reverse : ""}`}>
        <div className={`${styles.visual} ${imageFill ? styles.visualFill : ""}`}>{visual}</div>
        <div className={styles.copy}>
          <p className="label label-gold">{label}</p>
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
          <p className={styles.text}>{text}</p>
          {listItems && listItems.length > 0 && (
            <ul className={styles.list}>
              {listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <div className={styles.actions}>
            <Link href={href} className="btn">
              {action}
            </Link>
            {secondaryHref && secondaryAction && (
              <Link href={secondaryHref} className="btn-text">
                {secondaryAction}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
