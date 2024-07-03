"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { links } from "@/lib/strings/navigation-links";
import { cn } from "@/lib/utils";
import { Home, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavigation() {
  const pathname = usePathname();
  const isActive = (currentPath: string) => {
    return pathname === currentPath;
  };
  return (
    <Sheet>
      <SheetTrigger className="md:hidden" asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        </Button>
      </SheetTrigger>
      <SheetContent className="md:hidden p-0">
        <SheetHeader>
          <SheetTitle className="text-2xl font-extralight border-b p-5 bg-blue-50">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-5 md:hidden w-fit p-5">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              <SheetClose>
                <span
                  className={cn(
                    "flex items-center capitalize z-10 hover:underline underline-offset-4 hover:text-primary",
                    isActive(link.href) && "text-primary underline"
                  )}
                >
                  <link.icon className="w-5 mr-1" />
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
