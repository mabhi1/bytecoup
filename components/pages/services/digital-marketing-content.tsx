import Image from "next/image";
import FeatureCard from "./feature-card";

export default function DigitalMarketingContent() {
  const features = [
    {
      title: "Social Media Marketing",
      content:
        "Engaging content and targeted ads to build your presence on platforms like Facebook, Instagram, LinkedIn, and more.",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      content: "Maximizing ROI with strategic ad placements on Google, Bing, and social media.",
    },
    {
      title: "Email Marketing",
      content: "Crafting compelling email campaigns that foster customer relationships and drive conversions.",
    },
    {
      title: "Content Marketing",
      content: "Creating valuable content to attract, engage, and convert your audience.",
    },
    {
      title: "Marketing Automation",
      content: "Streamlining your campaigns with tools that optimize your marketing efforts.",
    },
    {
      title: "Analytics and Reporting",
      content: "In-depth performance analysis to continually refine and improve your marketing strategy.",
    },
  ];
  return (
    <div className="w-full space-y-8 overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-amber-700 to-yellow-900">
      <div className="flex items-center flex-row-reverse gap-8">
        <div className="space-y-5">
          <p className="text-3xl font-light uppercase">Digital Marketing</p>
          <div className="text-slate-300">
            Drive engagement and conversions with our innovative digital marketing solutions. We blend creativity with
            data-driven strategies to create impactful campaigns that resonate with your audience and deliver measurable
            results. Our holistic approach covers every aspect of digital marketing, ensuring your brand reaches and
            captivates your target audience.
          </div>
        </div>
        <Image src="/digital-marketing.webp" alt="Service offered" width={2048} height={1542} className="h-44 w-auto" />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} title={feature.title} content={feature.content} />
        ))}
      </div>
    </div>
  );
}
