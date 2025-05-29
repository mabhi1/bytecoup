"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { authLinks, links } from "@/lib/strings/navigation-links";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [navLinks, setNavLinks] = useState(
    session?.user
      ? [...links, ...authLinks.filter((link) => link.auth === true)]
      : [...links, ...authLinks.filter((link) => link.auth === false)]
  );
  const isActive = (currentPath: string) => {
    return pathname === currentPath;
  };

  useEffect(() => {
    if (session?.user) setNavLinks([...links, ...authLinks.filter((link) => link.auth === true)]);
    else setNavLinks([...links, ...authLinks.filter((link) => link.auth === false)]);
  }, [status, session?.user]);

  return (
    <nav className="lg:flex gap-8 hidden">
      {navLinks.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={cn(
            "flex items-center capitalize z-10 hover:underline underline-offset-4 hover:text-primary",
            isActive(link.href) && "text-primary underline"
          )}
        >
          <link.icon className="w-5 mr-1" />
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
