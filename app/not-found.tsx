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
      <Button asChild>
        <Link href="/">
          <HomeIcon className="w-5 mr-1" />
          <span>Back to home</span>
        </Link>
      </Button>
    </div>
  );
}
