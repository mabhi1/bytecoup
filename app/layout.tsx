import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import Header from "@/components/layout/header/header";
import "./globals.css";
import Footer from "@/components/layout/footer/footer";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
      <body className={cn(heebo.className, "flex flex-col min-h-screen tracking-wide")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-1 w-full max-w-7xl mx-auto p-5 pt-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
