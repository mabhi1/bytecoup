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
import MotionDiv from "@/components/ui/motion-div";

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
    <MotionDiv direction="btot" className="py-10 md:py-16 space-y-12">
      <div className="flex gap-5">
        <div className="space-y-5 relative">
          <h2 className="text-2xl md:text-3xl font-light uppercase">Our Services</h2>
          <div className="tracking-wide">
            At Bytecoup, we offer digital solutions designed to meet all your web, mobile, and desktop application
            needs. From concept to deployment, we work closely with you to understand your vision and objectives,
            creating solutions that are not only visually stunning but also highly functional. Our commitment to and
            attention to detail guarantee that your digital presence will engage your audience. Explore our services and
            discover how we can transform your ideas into reality, driving your business towards greater success and
            growth.
          </div>
        </div>
      </div>
      <div className="h-[80rem] md:h-[54rem] lg:h-[40rem] [perspective:1000px] relative flex flex-col mx-auto w-full items-start justify-start my-40">
        <Tabs tabs={tabs} />
      </div>
      <div className="space-y-5">
        <div className="text-2xl md:text-3xl font-light uppercase pt-20">Any questions?</div>
        <div>
          Found something you want or have any question? You can reach out to us on{" "}
          <Button variant="link" className="p-0 text-sm md:text-base h-fit" asChild>
            <Link href="/contact">contact page.</Link>
          </Button>{" "}
          You can also visit our{" "}
          <Button variant="link" className="p-0 text-sm md:text-base h-fit" asChild>
            <Link href="/faq">FAQs</Link>
          </Button>{" "}
          section for commonly asked questions about our services.
        </div>
      </div>
    </MotionDiv>
  );
}
