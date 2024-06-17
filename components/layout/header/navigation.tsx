"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "../../ui/button";

export default function Navigation() {
  const { setTheme, theme } = useTheme();
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
    <div className="gap-8 hidden md:flex">
      <nav className="flex gap-8">
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
      <Button variant="outline" size="icon" onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}>
        <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <SunIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
