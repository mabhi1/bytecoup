"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    {
      title: "home",
      href: "/",
    },
    {
      title: "services",
      href: "/services",
    },
    {
      title: "work",
      href: "/work",
    },
    {
      title: "about",
      href: "/about",
    },
    {
      title: "contact",
      href: "/contact",
    },
  ];

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
      <ModeToggle />
    </nav>
  );
}
