import Link from "next/link";
import Navigation from "./navigation";
import StickyWrapper from "./sticky-wrapper";

export default function Header() {
  return (
    <StickyWrapper>
      <header className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <h1 className="uppercase text-lg font-medium">
          <Link href="/">Delite Solutions</Link>
        </h1>
        <Navigation />
      </header>
    </StickyWrapper>
  );
}
