import Link from "next/link";
import Navigation from "./navigation";
import StickyWrapper from "./sticky-wrapper";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/mode-toggle";
import MobileNavigation from "./mobile-navigation";

export default function Header() {
  return (
    <StickyWrapper>
      <header className="flex items-center w-full max-w-7xl mx-auto gap-2 md:gap-8">
        <h1 className="uppercase text-lg font-medium mr-auto">
          <Link href="/">
            <Image src="/logo.png" width={150} height={80} alt="Bytecoup" className="w-40 md:w-auto h-auto" />
          </Link>
        </h1>
        <Navigation />
        <MobileNavigation />
        <ModeToggle />
      </header>
    </StickyWrapper>
  );
}
