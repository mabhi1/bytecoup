import { Button } from "@/components/ui/button";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-20 border-t grid grid-cols-2 md:grid-cols-4 gap-16">
      <div className="flex flex-col gap-5 col-span-2">
        <div>
          <div className="uppercase text-lg font-medium">Delite Solutions</div>
          <div className="text-muted-foreground">Expert web solutions for modern businesses</div>
        </div>
        <div>
          Comprehensive digital solutions for web and mobile development, with 24/7 maintenance. We craft, optimize, and
          support your digital success. Trust us to transform your vision into an engaging and scalable online presence.
        </div>
        <div className="text-muted-foreground">© 2024 Delite Solutions | Terms and Conditions | Privacy Policy</div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="uppercase text-lg font-medium">Links</div>
        <div className="flex flex-col gap-1">
          <Link href="/services" className="hover:text-primary">
            Services
          </Link>
          <Link href="/services" className="hover:text-primary">
            About Us
          </Link>
          <Link href="/services" className="hover:text-primary">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="uppercase text-lg font-medium">Contact Us</div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <PhoneIcon className="w-4" />
            012-345678
          </div>
          <div className="flex gap-1">
            <MailIcon className="w-4" />
            demoemail@delite.com
          </div>
          <div className="flex gap-1">
            <MapPinIcon className="w-4" /> 123 First Floor, Second Street, New Delhi 110092
          </div>
        </div>
      </div>
    </footer>
  );
}
