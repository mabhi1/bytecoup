import Image from "next/image";
import FeatureCard from "./feature-card";

export default function BrandingContent() {
  const features = [
    {
      title: "Brand Strategy",
      content: "Developing a clear, cohesive strategy that reflects your brand's mission, vision, and values.",
    },
    {
      title: "Logo and Visual Identity Design",
      content: "Crafting unique logos and visual elements that capture your brand's essence.",
    },
    {
      title: "Brand Messaging",
      content: "Creating a consistent and compelling voice across all communication channels.",
    },
    {
      title: "Brand Positioning",
      content: "Identifying and establishing your brand's place in the market.",
    },
    {
      title: "Brand Guidelines",
      content: "Developing comprehensive guidelines to maintain brand consistency.",
    },
    {
      title: "Rebranding Services",
      content: "Refreshing your brand to align with new goals or market changes.",
    },
  ];
  return (
    <div className="w-full space-y-8 overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-amber-700 to-yellow-900">
      <div className="flex items-center flex-row-reverse gap-8">
        <div className="space-y-5">
          <p className="text-3xl font-light uppercase">Branding</p>
          <div className="text-slate-300">
            Define and amplify your brand identity with our expert branding services. We help you craft a compelling
            brand narrative that resonates with your target audience, builds trust, and differentiates you in the
            marketplace. From logo design to brand messaging, we ensure every element aligns with your vision and
            values.
          </div>
        </div>
        <Image src="/branding.webp" alt="Service offered" width={2048} height={1542} className="h-44 w-auto" />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} title={feature.title} content={feature.content} />
        ))}
      </div>
    </div>
  );
}
