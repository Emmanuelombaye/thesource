import type { ReactNode } from "react";

import type { CertificateRecord } from "@/data/products";

import styles from "./CertificatePanel.module.css";



interface CertificatePanelProps {

  record?: CertificateRecord | null;

  lotId?: string;

  unavailable?: boolean;

}



function FieldRow({ label, value }: { label: string; value: ReactNode }) {

  return (

    <div className={styles.row}>

      <span className="label">{label}</span>

      <span>{value}</span>

    </div>

  );

}



function PanelHeader() {

  return (

    <div className={styles.panelHeader}>

      <p className="label label-gold">THE SOURCE / VERIFIED MATERIAL</p>

    </div>

  );

}



export default function CertificatePanel({

  record,

  lotId,

  unavailable,

}: CertificatePanelProps) {

  if (unavailable || !record) {

    return (

      <div className={styles.panel}>

        <PanelHeader />

        <p className="label">CERTIFICATE LOOKUP</p>

        <h3 className={styles.title}>Certificate Unavailable</h3>



        <div className={styles.grid}>
          <FieldRow label="Status" value="Unavailable" />
          <FieldRow label="Compound" value="Unavailable" />
          <FieldRow label="Lot" value={lotId?.trim() || "Unavailable"} />

          <FieldRow label="Tested" value="Unavailable" />

          <FieldRow label="Assay" value="Unavailable" />

          <FieldRow label="Certificate" value="Unavailable" />

          <FieldRow label="Storage" value="Unavailable" />

        </div>



        <p className={styles.note}>

          No verified record on file for this lot. Contact{" "}

          <a href="mailto:admin@thesource.gold">admin@thesource.gold</a> and

          the house will confirm within 24 hours.

        </p>

      </div>

    );

  }



  return (

    <div className={styles.panel}>

      <PanelHeader />

      <p className="label">CERTIFICATE LOOKUP</p>



      <div className={styles.grid}>

        <FieldRow label="Lot" value={record.lotId} />

        <FieldRow

          label="Status"

          value={

            <span className={styles.documented}>

              {record.status === "documented" ? "Documented" : "Unavailable"}

            </span>

          }

        />

        <FieldRow label="Compound" value={record.compound} />

        <FieldRow label="Tested" value={record.testedDate ?? "Unavailable"} />

        <FieldRow label="Assay" value={record.assay ?? "Unavailable"} />

        <FieldRow label="Storage" value={record.storage ?? "Unavailable"} />

        <FieldRow

          label="Document"

          value={

            record.certificateUrl ? (

              <a href={record.certificateUrl} target="_blank" rel="noopener noreferrer">

                View PDF

              </a>

            ) : (

              "Unavailable"

            )

          }

        />

      </div>

    </div>

  );

}

