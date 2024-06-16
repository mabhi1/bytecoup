import Link from "next/link";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="uppercase text-lg">
        <Link href="/">Delite Solutions</Link>
      </h1>
      <Navigation />
    </header>
  );
}
