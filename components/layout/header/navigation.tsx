"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { links } from "@/lib/strings/navigation-links";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (currentPath: string) => {
    return pathname === currentPath;
  };

  return (
    <nav className="md:flex gap-8 hidden">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={cn(
            "flex items-center capitalize z-10 hover:underline underline-offset-4 hover:text-primary",
            isActive(link.href) && "text-primary underline"
          )}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
