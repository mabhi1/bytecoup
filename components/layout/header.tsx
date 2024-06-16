import Link from "next/link";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="sticky z-20 bg-white dark:bg-black py-5 px-20 border-b top-0 flex justify-between items-center">
      <h1 className="uppercase text-lg">
        <Link href="/">Delite Solutions</Link>
      </h1>
      <Navigation />
    </header>
  );
}
