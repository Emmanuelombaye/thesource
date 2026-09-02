"use client";

import dynamic from "next/dynamic";

const Concierge = dynamic(() => import("@/components/Concierge"));
const InvitationModal = dynamic(() => import("@/components/InvitationModal"));

export default function ClientOverlays() {
  return (
    <>
      <InvitationModal />
      <Concierge />
    </>
  );
}
