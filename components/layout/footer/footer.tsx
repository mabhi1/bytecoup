import { Button } from "@/components/ui/button";
import { common } from "@/lib/strings/common";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-5 py-12 grid grid-cols-3 md:grid-cols-6 gap-5 lg:gap-16 max-w-7xl mx-auto">
      <div className="flex flex-col gap-3 md:gap-5 col-span-3 md:col-span-3">
        <div>
          <div className="uppercase text-lg font-medium">Bytecoup</div>
          <div className="text-muted-foreground text-sm">Expert web solutions for modern businesses</div>
        </div>
        <div className="text-sm">
          Comprehensive digital solutions for web and mobile development, with 24/7 maintenance. We craft, optimize, and
          support your digital success. Trust us to transform your vision into an engaging and scalable online presence.
        </div>
        <div className="text-muted-foreground text-sm">
          © 2024 Bytecoup |{" "}
          <Button variant="link" className="p-0 text-sm text-primary/80 h-fit" asChild>
            <Link href="/terms&conditions">Terms and Conditions</Link>
          </Button>{" "}
          |{" "}
          <Button variant="link" className="p-0 text-sm text-primary/80 h-fit" asChild>
            <Link href="/privacy">Privacy Policy</Link>
          </Button>{" "}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="uppercase text-lg font-medium">Links</div>
        <div className="flex flex-col gap-1 text-sm">
          <Link href="/services" className="hover:text-primary w-fit">
            Services
          </Link>
          <Link href="/work" className="hover:text-primary w-fit">
            Work Samples
          </Link>
          <Link href="/contact" className="hover:text-primary w-fit">
            Contact Us
          </Link>
          <Link href="/careers" className="hover:text-primary w-fit">
            Careers
          </Link>
          <Link href="/faq" className="hover:text-primary w-fit">
            FAQs
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5 col-span-2">
        <div className="uppercase text-lg font-medium">Contact Us</div>
        <div className="flex flex-col gap-1 text-sm">
          <div className="flex gap-1 items-center">
            <PhoneIcon className="w-4" />
            <span className="w-fit">{common.phone.india}</span>
          </div>
          <div className="flex gap-1 items-center">
            <MailIcon className="w-4" />
            <span className="w-fit">{common.emails.default}</span>
          </div>
          <div className="flex gap-1 items-center">
            <MapPinIcon className="w-4" /> <span className="w-fit">{common.address.india}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
