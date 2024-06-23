import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
