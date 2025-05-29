"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <Link href="/">Home</Link>
      Dashboard
      <Button variant="destructive" onClick={() => signOut()}>
        Sign out
      </Button>
    </div>
  );
}
