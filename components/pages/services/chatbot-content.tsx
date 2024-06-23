import ServiceCard from "./service-card";

export default function ChatbotContent() {
  const features = [
    {
      title: "Custom Chatbot Development",
      content: "Tailored AI solutions to fit your specific business needs and objectives.",
    },
    {
      title: "Natural Language Processing (NLP)",
      content: "Advanced NLP capabilities for understanding and processing human language.",
    },
    {
      title: "Multi-Platform Integration",
      content: "Deploy chatbots across various platforms including websites, mobile apps, and social media.",
    },
    {
      title: "Automated Workflow Management",
      content: "Streamline repetitive tasks and processes to enhance operational efficiency.",
    },
    {
      title: "Multi-Language Support",
      content: "Communicate with users in multiple languages to expand your reach globally.",
    },
    {
      title: "Secure and Compliant",
      content: "Ensure data privacy and compliance with industry standards and regulations.",
    },
  ];
  const image = {
    src: "/chatbot.png",
    alt: "Service offered",
  };
  return (
    <ServiceCard
      heading="Chatbot Development"
      description="Revolutionize your customer engagement with our sophisticated chatbot development services. We create
            intelligent, conversational AI solutions that provide seamless interactions, streamline support, and enhance
            user experiences. Our chatbots are designed to understand and respond to user queries effectively,
            integrating smoothly with your existing systems and delivering real-time assistance."
      image={image}
      features={features}
    />
  );
}
