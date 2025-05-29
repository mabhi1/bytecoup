import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto p-5 pt-0">{children}</main>
      <Separator />
      <Footer />
    </>
  );
}
