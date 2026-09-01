import StateMessage from "@/components/StateMessage";

/** PDF deliverable #12 — route transition loading */
export default function Loading() {
  return (
    <div className="section">
      <div className="container">
        <StateMessage type="loading" />
      </div>
    </div>
  );
}
