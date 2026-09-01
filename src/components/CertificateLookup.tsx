"use client";

import { useState } from "react";
import CertificatePanel from "./CertificatePanel";
import StateMessage from "./StateMessage";
import { lookupCertificate } from "@/data/products";
import styles from "./CertificateLookup.module.css";

interface CertificateLookupProps {
  compact?: boolean;
  inputId?: string;
}

export default function CertificateLookup({
  compact = false,
  inputId,
}: CertificateLookupProps) {
  const [lotId, setLotId] = useState("");
  const [searched, setSearched] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof lookupCertificate>>(null);

  const id = inputId ?? (compact ? "lot-compact" : "lot");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(false);

    if (!lotId.trim()) {
      setValidationError(true);
      setSearched(false);
      return;
    }

    setLoading(true);
    setSearched(false);

    setTimeout(() => {
      setResult(lookupCertificate(lotId));
      setSearched(true);
      setLoading(false);
    }, 400);
  };

  return (
    <div className={compact ? styles.compact : styles.full}>
      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <label htmlFor={id} className="label">
          Lot Number
        </label>
        <div className={styles.row}>
          <input
            id={id}
            type="text"
            className={`input ${validationError ? "input-error" : ""}`}
            value={lotId}
            onChange={(e) => {
              setLotId(e.target.value);
              setValidationError(false);
            }}
            placeholder="Enter lot or report number"
            aria-invalid={validationError}
          />
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "…" : "Verify"}
          </button>
        </div>
      </form>

      {validationError && (
        <div className={styles.validation}>
          <StateMessage
            type="validation-error"
            title="Please check your entry"
            message="Enter a lot or report number from your vial label."
          />
        </div>
      )}

      {loading && <StateMessage type="loading" />}

      {searched && !loading && !validationError && (
        <div className={styles.result}>
          {result ? (
            <CertificatePanel record={result} />
          ) : (
            <CertificatePanel unavailable lotId={lotId} />
          )}
        </div>
      )}
    </div>
  );
}
