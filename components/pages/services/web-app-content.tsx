import Image from "next/image";
import FeatureCard from "./feature-card";

export default function WebAppContent() {
  const features = [
    {
      title: "Custom Web Application Development",
      content: "Tailored solutions to fit your unique business requirements.",
    },
    {
      title: "Responsive and Mobile-First Design",
      content: "Seamless performance across all devices for an optimal user experience.",
    },
    {
      title: "SEO and Performance Optimization",
      content: "Enhanced search engine visibility and lightning-fast load times.",
    },
    {
      title: "E-commerce Solutions",
      content: "Comprehensive tools for online sales, from product management to secure payment gateways.",
    },
    {
      title: "Content Management Systems (CMS)",
      content: "Easy-to-use platforms for managing your website's content.",
    },
    {
      title: "Progressive Web Apps (PWAs)",
      content: "Offline capabilities and native app-like experience on the web.",
    },
  ];
  return (
    <div className="w-full space-y-8 overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-amber-700 to-yellow-900">
      <div className="flex items-center flex-row-reverse gap-8">
        <div className="space-y-5">
          <p className="text-3xl font-light uppercase">Web Application Development</p>
          <div>
            Unlock the full potential of your online presence with our cutting-edge web application development
            services. We create dynamic, responsive, and user-friendly web applications that cater to your business
            requirements, ensuring seamless performance and engaging user experiences. Our team leverages the latest
            technologies to build scalable and secure web solutions tailored to your unique needs.
          </div>
        </div>
        <Image src="/webdev.png" alt="Service offered" width={2048} height={1542} className="h-44 w-auto" />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} title={feature.title} content={feature.content} />
        ))}
      </div>
    </div>
  );
}
