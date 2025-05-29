"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { authLinks, links } from "@/lib/strings/navigation-links";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileNavigation() {
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
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        </Button>
      </SheetTrigger>
      <SheetContent className="lg:hidden p-0">
        <SheetHeader>
          <SheetTitle className="text-2xl font-extralight p-4">Menu</SheetTitle>
        </SheetHeader>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
        <nav className="flex flex-col gap-5 lg:hidden w-fit p-5 mt-4">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <SheetClose>
                <span
                  className={cn(
                    "flex gap-2 ml-2 items-center capitalize z-10 hover:underline underline-offset-4 hover:text-primary",
                    isActive(link.href) && "text-primary underline"
                  )}
                >
                  <link.icon className="w-5" />
                  {link.title}
                </span>
              </SheetClose>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
