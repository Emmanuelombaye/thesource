import Link from "next/link";
import styles from "./StateMessage.module.css";

type StateType =
  | "loading"
  | "empty"
  | "sold-out"
  | "certificate-unavailable"
  | "validation-error";

interface StateMessageProps {
  type: StateType;
  title?: string;
  message?: string;
  actionLabel?: string;
  actionHref?: string;
}

const defaults: Record<
  StateType,
  { title: string; message: string; actionLabel?: string; actionHref?: string }
> = {
  loading: {
    title: "Loading",
    message: "Please wait while we retrieve your information.",
  },
  empty: {
    title: "Your Selection",
    message: "Your selection is empty.",
    actionLabel: "Explore the Collection",
    actionHref: "/collection",
  },
  "sold-out": {
    title: "Sold Out",
    message:
      "This item is currently unavailable. Check back or contact support for availability.",
    actionLabel: "Return to The Collection",
    actionHref: "/collection",
  },
  "certificate-unavailable": {
    title: "Certificate Unavailable",
    message:
      "No verified record on file for this lot. Contact admin@thesource.gold and the house will confirm within 24 hours.",
    actionLabel: "Certificate Lookup",
    actionHref: "/certificates",
  },
  "validation-error": {
    title: "Please check your entry",
    message: "The information provided could not be verified. Try again.",
  },
};

export default function StateMessage({
  type,
  title,
  message,
  actionLabel,
  actionHref,
}: StateMessageProps) {
  const d = defaults[type];

  return (
    <div className={styles.state} role="status">
      {type === "loading" && (
        <div className={styles.spinner} aria-hidden="true" />
      )}
      <p className="label label-gold">{type.replace("-", " ")}</p>
      <h2 className={styles.title}>{title ?? d.title}</h2>
      <p className={styles.message}>{message ?? d.message}</p>
      {(actionHref ?? d.actionHref) && (
        <Link
          href={actionHref ?? d.actionHref!}
          className="btn"
          style={{ marginTop: "1.5rem" }}
        >
          {actionLabel ?? d.actionLabel}
        </Link>
      )}
    </div>
  );
}
