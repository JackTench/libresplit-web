import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function HomePage() {
  return (
    <div className="flex h-20 flex-col items-center justify-center">
      <h1 className="text-7xl">LibreSplit</h1>
      <div className="h-5 text-xl">
        Free speedrun timer with auto splitting and load removal
        <PointerHighlight>for Linux.</PointerHighlight>
      </div>
    </div>
  );
}
