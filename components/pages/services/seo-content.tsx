import ServiceCard from "./service-card";

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
  const image = {
    src: "/seo.webp",
    alt: "Service offered",
  };
  return (
    <ServiceCard
      heading="Search Engine Optimization (SEO)"
      description="Maximize your online reach and attract more traffic with our comprehensive SEO services. We employ advanced
            strategies to enhance your website's visibility on search engines, ensuring that your business ranks
            higher and reaches the right audience. Our approach is tailored to your unique needs, driving organic growth
            and improving your search engine performance."
      image={image}
      features={features}
    />
  );
}
