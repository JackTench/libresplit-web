"use client";

import { useState, useEffect } from "react";

import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function HomePage() {
  // Fire "For Linux" animation after 3 seconds.
  const [showForLinuxAnim, setShowForLinuxAnim] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForLinuxAnim(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-50 flex-col items-center justify-center">
      <h1 className="text-7xl">LibreSplit</h1>
      <div className="h-5 text-xl">
        Free speedrun timer with auto splitting and load removal
        {showForLinuxAnim ? <ForLinuxTextAnimated /> : <ForLinuxTextPlain />}
      </div>
    </div>
  );
}

function ForLinuxTextPlain() {
  return <p>for Linux.</p>;
}

function ForLinuxTextAnimated() {
  return <PointerHighlight>for Linux.</PointerHighlight>;
}
