import Image from "next/image";
import FeatureCard from "./feature-card";

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
  return (
    <div className="w-full space-y-8 overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-amber-700 to-yellow-900">
      <div className="flex items-center flex-row-reverse gap-8">
        <div className="space-y-5">
          <p className="text-3xl font-light uppercase">Chatbot Development</p>
          <div>
            Revolutionize your customer engagement with our sophisticated chatbot development services. We create
            intelligent, conversational AI solutions that provide seamless interactions, streamline support, and enhance
            user experiences. Our chatbots are designed to understand and respond to user queries effectively,
            integrating smoothly with your existing systems and delivering real-time assistance.
          </div>
        </div>
        <Image src="/chatbot.png" alt="Service offered" width={2048} height={1542} className="h-44 w-auto" />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} title={feature.title} content={feature.content} />
        ))}
      </div>
    </div>
  );
}
