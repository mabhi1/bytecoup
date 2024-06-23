import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import WebAppContent from "@/components/pages/services/web-app-content";
import MobileAppContent from "@/components/pages/services/mobile-app-content";
import DesktopAppContent from "@/components/pages/services/desktop-app-content";
import ChatbotContent from "@/components/pages/services/chatbot-content";
import SEOContent from "@/components/pages/services/seo-content";
import DigitalMarketingContent from "@/components/pages/services/digital-marketing-content";
import BrandingContent from "@/components/pages/services/branding-content";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Services() {
  const tabs = [
    {
      title: "Web App",
      value: "Web App",
      content: <WebAppContent />,
    },
    {
      title: "Mobile App",
      value: "Mobile App",
      content: <MobileAppContent />,
    },
    {
      title: "Desktop App",
      value: "Desktop App",
      content: <DesktopAppContent />,
    },
    {
      title: "Chatbot",
      value: "Chatbot",
      content: <ChatbotContent />,
    },
    {
      title: "SEO",
      value: "SEO",
      content: <SEOContent />,
    },
    {
      title: "Digital Marketing",
      value: "Digital Marketing",
      content: <DigitalMarketingContent />,
    },
    {
      title: "Branding",
      value: "Branding",
      content: <BrandingContent />,
    },
  ];
  return (
    <div className="py-16 space-y-12">
      <div className="flex gap-5">
        <div className="space-y-5">
          <h2 className="text-3xl font-light uppercase">Our Services</h2>
          <div className="tracking-wide">
            At Delite, we offer digital solutions designed to meet all your web, mobile, and desktop application needs.
            From concept to deployment, we work closely with you to understand your vision and objectives, creating
            solutions that are not only visually stunning but also highly functional. Our commitment to and attention to
            detail guarantee that your digital presence will engage your audience. Explore our services and discover how
            we can transform your ideas into reality, driving your business towards greater success and growth.
          </div>
        </div>
        <Image src="/services-image.png" alt="Service offered" width={1000} height={994} className="w-40 h-auto" />
      </div>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col mx-auto w-full items-start justify-start my-40">
        <Tabs tabs={tabs} />
      </div>
      <h2 className="text-3xl font-light uppercase pt-20">Any questions?</h2>
      <p>
        Found something you want or have any question? You can reach out to us on{" "}
        <Link href="/contact" legacyBehavior passHref>
          <Button variant="link" className="p-0">
            contact page.
          </Button>
        </Link>{" "}
        You can also visit our{" "}
        <Link href="/faq" legacyBehavior passHref>
          <Button variant="link" className="p-0">
            FAQs
          </Button>
        </Link>{" "}
        section for commonly asked questions about our services.
      </p>
    </div>
  );
}
