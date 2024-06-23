import ServiceCard from "./service-card";

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
  const image = {
    src: "/webdev.png",
    alt: "Service offered",
  };
  return (
    <ServiceCard
      heading="Web Application Development"
      description="Unlock the full potential of your online presence with our cutting-edge web application development
            services. We create dynamic, responsive, and user-friendly web applications that cater to your business
            requirements, ensuring seamless performance and engaging user experiences. Our team leverages the latest
            technologies to build scalable and secure web solutions tailored to your unique needs."
      image={image}
      features={features}
    />
  );
}
