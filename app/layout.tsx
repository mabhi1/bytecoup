import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import Header from "@/components/layout/header/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import Footer from "@/components/layout/footer/footer";

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
      <body className={heebo.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="w-full max-w-7xl mx-auto p-5 pt-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
