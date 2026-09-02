"use client";

import styles from "./InvitationForm.module.css";

interface InvitationFormProps {
  id?: string;
  onSubmit?: () => void;
  compact?: boolean;
}

export default function InvitationForm({ id, onSubmit, compact = false }: InvitationFormProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      localStorage.setItem("thesource-invitation-dismissed", "true");
    } catch {
      /* ignore */
    }
    onSubmit?.();
  }

  return (
    <form
      id={id}
      className={`${styles.form} ${compact ? styles.compact : ""}`}
      onSubmit={handleSubmit}
    >
      <label className={styles.field}>
        <span className={styles.label}>First name</span>
        <input type="text" name="firstName" autoComplete="given-name" required />
      </label>
      <label className={styles.field}>
        <span className={styles.label}>Email address</span>
        <input type="email" name="email" autoComplete="email" required />
      </label>
      <button type="submit" className="btn-gold">
        Claim 20% off
      </button>
    </form>
  );
}
