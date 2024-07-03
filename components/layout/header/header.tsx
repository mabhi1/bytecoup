import Link from "next/link";
import Navigation from "./navigation";
import StickyWrapper from "./sticky-wrapper";
import Image from "next/image";

export default function Header() {
  return (
    <StickyWrapper>
      <header className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <h1 className="uppercase text-lg font-medium">
          <Link href="/">
            <Image src="/logo.png" width={1000} height={625} alt="Bytecoup" className="w-40 h-auto" />
          </Link>
        </h1>
        <Navigation />
      </header>
    </StickyWrapper>
  );
}
