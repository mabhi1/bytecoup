import ServiceCard from "./service-card";

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
  const image = {
    src: "/digital-marketing.webp",
    alt: "Service offered",
  };
  return (
    <ServiceCard
      heading="Digital Marketing"
      description="Drive engagement and conversions with our innovative digital marketing solutions. We blend creativity with
            data-driven strategies to create impactful campaigns that resonate with your audience and deliver measurable
            results. Our holistic approach covers every aspect of digital marketing, ensuring your brand reaches and
            captivates your target audience."
      image={image}
      features={features}
    />
  );
}
