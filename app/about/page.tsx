import AnimatedCounter from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import MotionDiv from "@/components/ui/motion-div";
import { ContactIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <MotionDiv direction="btot" className="py-10 md:py-16 space-y-5">
      <Image
        src="/office-space.webp"
        alt="bytecoup"
        height={2880}
        width={1622}
        className="w-full max-w-3xl mx-auto rounded-xl h-[12rem] md:h-[27rem]"
      />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 py-5 md:py-8 items-start">
        <div className="text-center border-r">
          <div className="text-5xl md:text-6xl font-light uppercase text-primary">
            <AnimatedCounter from={0} to={5} />+
          </div>
          <div className="text-xl md:text-2xl font-light w-24 md:w-auto mx-auto">Years Experience</div>
        </div>
        <div className="text-center md:border-r">
          <div className="text-5xl md:text-6xl font-light uppercase text-primary">
            <AnimatedCounter from={40} to={50} />+
          </div>
          <div className="text-xl md:text-2xl font-light">Clients</div>
        </div>
        <div className="text-center border-r">
          <div className="text-5xl md:text-6xl font-light uppercase text-primary">
            <AnimatedCounter from={130} to={150} />+
          </div>
          <div className="text-xl md:text-2xl font-light">Projects</div>
        </div>
        <div className="text-center">
          <div className="text-5xl md:text-6xl font-light uppercase text-primary">
            <AnimatedCounter from={40} to={50} />+
          </div>
          <div className="text-xl md:text-2xl font-light">People</div>
        </div>
      </div>
      <div className="text-lg md:text-2xl font-light pt-5 md:pt-10">
        Empowering Businesses Through Innovative Digital Solutions
      </div>
      <div>
        Welcome to Bytecoup, where we transform your business vision into reality through our comprehensive range of
        development and marketing services. We are dedicated to delivering exceptional digital solutions that drive
        growth, enhance engagement, and create lasting value for your business. Our expertise spans web, mobile, and
        desktop application development, alongside cutting-edge chatbot development, SEO, digital marketing, and
        branding services.
      </div>
      <div className="text-2xl md:text-3xl font-light uppercase pt-5 md:pt-10">Our Mission</div>
      <div>
        Our mission is to harness the power of technology to deliver exceptional digital solutions that drive success
        for businesses of all sizes. We are dedicated to understanding your unique needs and providing personalized
        service that ensures your digital transformation is seamless, effective, and aligned with your goals.
      </div>
      <div className="text-2xl md:text-3xl font-light uppercase pt-5 md:pt-10">Why Choose Us?</div>
      <ul className="space-y-2">
        <li>
          Expertise Across Platforms:{" "}
          <span className="text-muted-foreground">
            We offer a holistic approach to development with expertise in web, mobile, and desktop applications.
          </span>
        </li>
        <li>
          Customer-Centric Approach:{" "}
          <span className="text-muted-foreground">
            Your success is our priority. We work closely with you to create solutions that meet your specific
            requirements and exceed your expectations.
          </span>
        </li>
        <li>
          Innovative Solutions:{" "}
          <span className="text-muted-foreground">
            We stay ahead of the curve by adopting the latest technologies and best practices in the industry.
          </span>
        </li>
        <li>
          Commitment to Quality:{" "}
          <span className="text-muted-foreground">
            From initial consultation to final deployment, we ensure the highest standards of quality and performance in
            every project.
          </span>
        </li>
        <li>
          End-to-End Support:{" "}
          <span className="text-muted-foreground">
            Our services don&apos;t end at deployment. We provide ongoing support and maintenance to ensure your
            applications remain up-to-date and effective.
          </span>
        </li>
        <li>
          24/7 Customer Support:{" "}
          <span className="text-muted-foreground">
            Our dedicated team is always available to assist you, resolving issues promptly and effectively.
          </span>
        </li>
      </ul>
      <div className="text-2xl md:text-3xl font-light uppercase pt-5 md:pt-10">Our Values</div>
      <ul className="space-y-2">
        <li>
          Innovation:{" "}
          <span className="text-muted-foreground">
            We embrace creativity and innovation to deliver cutting-edge solutions.
          </span>
        </li>
        <li>
          Integrity:{" "}
          <span className="text-muted-foreground">We build trust through transparent and ethical practices.</span>
        </li>
        <li>
          Excellence:{" "}
          <span className="text-muted-foreground">We strive for excellence in every aspect of our work.</span>
        </li>
        <li>
          Collaboration:{" "}
          <span className="text-muted-foreground">
            We believe in the power of teamwork and collaboration, both within our company and with our clients.
          </span>
        </li>
      </ul>
      <div className="text-2xl md:text-3xl font-light uppercase pt-5 md:pt-10">Get in Touch</div>
      <div>
        Ready to transform your business with innovative digital solutions? Contact us today to discuss how we can help
        you achieve your goals and unlock new opportunities in the digital age.
      </div>
      <Button asChild>
        <Link href="/contact">
          <ContactIcon className="w-5 mr-1" />
          Contact Us
        </Link>
      </Button>
    </MotionDiv>
  );
}
