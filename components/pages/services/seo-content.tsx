import Image from "next/image";
import FeatureCard from "./feature-card";

export default function SEOContent() {
  const features = [
    {
      title: "Keyword Research and Analysis",
      content: "Identifying high-impact keywords to target for increased traffic and visibility.",
    },
    {
      title: "On-Page SEO",
      content: "Optimizing content, meta tags, and internal linking for better search engine ranking.",
    },
    {
      title: "Technical SEO",
      content: "Ensuring your website's infrastructure supports search engine indexing and crawling.",
    },
    {
      title: "Content Optimization",
      content: "Creating and refining content to align with search engine algorithms and user intent.",
    },
    {
      title: "Mobile SEO",
      content: "Optimizing your website for mobile search to reach users on-the-go.",
    },
    {
      title: "Local SEO",
      content: "Enhancing your presence in local searches with optimized local listings and geo-targeted keywords.",
    },
  ];
  return (
    <div className="w-full space-y-8 overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-amber-700 to-yellow-900">
      <div className="flex items-center flex-row-reverse gap-8">
        <div className="space-y-5">
          <p className="text-3xl font-light uppercase">Search Engine Optimization (SEO)</p>
          <div className="text-slate-300">
            Maximize your online reach and attract more traffic with our comprehensive SEO services. We employ advanced
            strategies to enhance your website&apos;s visibility on search engines, ensuring that your business ranks
            higher and reaches the right audience. Our approach is tailored to your unique needs, driving organic growth
            and improving your search engine performance.
          </div>
        </div>
        <Image src="/seo.webp" alt="Service offered" width={2048} height={1542} className="h-44 w-auto" />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} title={feature.title} content={feature.content} />
        ))}
      </div>
    </div>
  );
}
