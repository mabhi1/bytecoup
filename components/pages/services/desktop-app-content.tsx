import Image from "next/image";
import FeatureCard from "./feature-card";

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
  return (
    <div className="w-full space-y-8 overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-amber-700 to-yellow-900">
      <div className="flex items-center flex-row-reverse gap-8">
        <div className="space-y-5">
          <p className="text-3xl font-light uppercase">Desktop Application Development</p>
          <div className="text-slate-300">
            Empower your business with our powerful, user-friendly desktop applications designed for various operating
            systems, including Windows, macOS, and Linux. Whether you need a standalone application or a complex
            enterprise solution, our desktop application development services ensure robust performance, enhanced
            security, and seamless integration with existing systems.
          </div>
        </div>
        <Image src="/deskdev.webp" alt="Service offered" width={2048} height={1542} className="h-44 w-auto" />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} title={feature.title} content={feature.content} />
        ))}
      </div>
    </div>
  );
}
