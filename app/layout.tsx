import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import Header from "@/components/layout/header";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const heebo = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delite Solutions",
  description: "Expert web solutions for modern businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(heebo.className, "w-full max-w-7xl mx-auto p-5")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
