import ServiceCard from "./service-card";

export default function DesktopAppContent() {
  const features = [
    {
      title: "Custom Desktop Software Development",
      content: "Solutions tailored to your specific business needs.",
    },
    {
      title: "Cross-Platform Development",
      content: "Applications that run smoothly on multiple operating systems.",
    },
    {
      title: "Integration with Existing Systems",
      content: "Seamless compatibility with your current infrastructure.",
    },
    {
      title: "Performance Optimization",
      content: "Fast and efficient applications that enhance productivity.",
    },
    {
      title: "Offline Functionality",
      content: "Reliable performance without the need for constant internet access.",
    },
    {
      title: "Automated Updates",
      content: "Ensure your application stays current with minimal user intervention.",
    },
  ];
  const image = {
    src: "/deskdev.webp",
    alt: "Service offered",
  };
  return (
    <ServiceCard
      heading="Desktop Application Development"
      description="Empower your business with our powerful, user-friendly desktop applications designed for various operating
            systems, including Windows, macOS, and Linux. Whether you need a standalone application or a complex
            enterprise solution, our desktop application development services ensure robust performance, enhanced
            security, and seamless integration with existing systems."
      image={image}
      features={features}
    />
  );
}
