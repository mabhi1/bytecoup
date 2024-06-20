"use client";

import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Image src="/not-found.png" width={801} height={800} alt="Page not found" className="w-80 aspect-square" />
      <div className="text-2xl">OOPS! Page not found.</div>
      <Link href="/" legacyBehavior passHref>
        <Button className="flex gap-1 items-center">
          <HomeIcon className="w-4" />
          Back to home
        </Button>
      </Link>
    </div>
  );
}
