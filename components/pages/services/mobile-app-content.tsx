import ServiceCard from "./service-card";

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
  const image = {
    src: "/mobdev.png",
    alt: "Service offered",
  };
  return (
    <ServiceCard
      heading="Mobile Application Development"
      description="Stay ahead in the mobile-first world with our high-performance, feature-rich mobile applications for both
            iOS and Android platforms. Our mobile app development services are tailored to provide an exceptional user
            experience, combining cutting-edge technology with intuitive design to deliver apps that captivate users and
            drive business growth."
      image={image}
      features={features}
    />
  );
}
