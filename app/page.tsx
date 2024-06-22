import HeroSection from "@/components/pages/home/hero-section";
import ReasonCards from "@/components/pages/home/reason-cards";
import { Testimonials } from "@/components/pages/home/testimonials";

export default function Home() {
  const reasons = [
    {
      title: "Web and Mobile Mastery",
      description:
        "We excel in both web and mobile development, ensuring a seamless digital experience across all platforms.",
    },
    {
      title: "Tailored to Your Needs",
      description: "Our solutions are customized to fit the unique requirements and goals of your business.",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Experience peace of mind with our 24/7 customer support, ensuring your solutions are always running smoothly.",
    },
    {
      title: "Latest Technologies",
      description:
        "We utilize the most current technologies and best practices to build robust and efficient solutions.",
    },
    {
      title: "Boost Your Visibility",
      description: "We implement SEO best practices to help your site rank higher in search engine results.",
    },
    {
      title: "Fast and Secure",
      description: "Our solutions are optimized for speed and security, enhancing user experience and trust.",
    },
    {
      title: "Clear Communication",
      description:
        "We maintain open and transparent communication throughout the project, keeping you informed every step of the way.",
    },
    {
      title: "Experienced Professionals",
      description: "Our team comprises experienced developers, designers, and strategists committed to excellence.",
    },
    {
      title: "Satisfied Clients",
      description: "We have a long list of happy clients who can attest to our quality and reliability.",
    },
  ];

  return (
    <div className="flex flex-col gap-5 md:gap-8 pb-16">
      <HeroSection />
      <div className="text-3xl font-light uppercase mx-auto">Why Delite Solutions?</div>
      <ReasonCards items={reasons} />
      <Testimonials />
    </div>
  );
}
