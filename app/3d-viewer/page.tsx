"use client"

import dynamic from "next/dynamic";

const ThreeDViewer = dynamic(() => import("@/components/3d-showcase"), { ssr: false });

export default function Page() {
  return <ThreeDViewer />;
}
