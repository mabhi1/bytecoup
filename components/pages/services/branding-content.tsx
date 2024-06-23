import ServiceCard from "./service-card";

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
  const image = {
    src: "/branding.webp",
    alt: "Service offered",
  };
  return (
    <ServiceCard
      heading="Branding"
      description="Define and amplify your brand identity with our expert branding services. We help you craft a compelling
            brand narrative that resonates with your target audience, builds trust, and differentiates you in the
            marketplace. From logo design to brand messaging, we ensure every element aligns with your vision and
            values."
      image={image}
      features={features}
    />
  );
}
