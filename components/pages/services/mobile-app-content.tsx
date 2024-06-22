import Image from "next/image";
import FeatureCard from "./feature-card";

export default function MobileAppContent() {
  const features = [
    {
      title: "iOS and Android App Development",
      content: "Custom apps that harness the full potential of each platform.",
    },
    {
      title: "Cross-Platform Solutions",
      content:
        "Consistent experience across different operating systems using technologies like Flutter and React Native.",
    },
    {
      title: "User-Centric Design",
      content: "Intuitive and engaging interfaces that prioritize user needs.",
    },
    {
      title: "Integration with Wearable Devices",
      content: "Expand your app's reach with support for smartwatches and other wearable tech.",
    },
    {
      title: "App Store Deployment and Marketing",
      content: "Streamlined processes for launching and promoting your app on major app stores.",
    },
    {
      title: "Mobile App Testing and Quality Assurance",
      content: "Rigorous testing to ensure flawless performance.",
    },
  ];
  return (
    <div className="w-full space-y-8 overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-amber-700 to-yellow-900">
      <div className="flex items-center flex-row-reverse gap-8">
        <div className="space-y-5">
          <p className="text-3xl font-light uppercase">Mobile Application Development</p>
          <div>
            Stay ahead in the mobile-first world with our high-performance, feature-rich mobile applications for both
            iOS and Android platforms. Our mobile app development services are tailored to provide an exceptional user
            experience, combining cutting-edge technology with intuitive design to deliver apps that captivate users and
            drive business growth.
          </div>
        </div>
        <Image src="/mobdev.png" alt="Service offered" width={2048} height={1542} className="h-44 w-auto" />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} title={feature.title} content={feature.content} />
        ))}
      </div>
    </div>
  );
}
