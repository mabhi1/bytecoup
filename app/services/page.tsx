import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { Separator } from "@/components/ui/separator";
import MotionDiv from "@/components/ui/motion-div";

export default function Services() {
  return (
    <div className="py-16 space-y-12">
      <div className="flex gap-5">
        <div className="space-y-5">
          <h2 className="text-3xl font-light uppercase">Our Services</h2>
          <div className="tracking-wide">
            At Delite, we offer a comprehensive suite of digital solutions designed to meet all your web, mobile, and
            desktop application needs. Our expert team excels in delivering customized, innovative, and reliable
            services that ensure your business stands out in the digital landscape. From concept to deployment, we work
            closely with you to understand your vision and objectives, creating solutions that are not only visually
            stunning but also highly functional. Our commitment to excellence and attention to detail guarantee that
            your digital presence will captivate and engage your audience. Explore our services and discover how we can
            transform your ideas into reality, driving your business towards greater success and growth. We can ensure
            you that our services will exceed your expectation and provide you the best value-for-money.
          </div>
        </div>
        <Image src="/services-image.png" alt="Service offered" width={1000} height={994} className="w-60 h-auto" />
      </div>
      <div className="text-3xl font-light uppercase pb-8">
        <span>With Delite you have the opportunity to get</span>
        <FlipWords words={["Better", "Latest", "Great"]} />
        <FlipWords words={["styling", "technology", "Support"]} />
      </div>
      <MotionDiv direction="rtol" className="flex items-center gap-8">
        <Image src="/webdev.png" alt="Service offered" width={2048} height={1542} className="w-96 h-fit shadow-lg" />
        <div className="space-y-5">
          <div className="text-3xl font-light uppercase">Web application development</div>
          <div>
            Unlock the full potential of your online presence with our cutting-edge web application development
            services. We create dynamic, responsive, and user-friendly web applications that cater to your business
            requirements, ensuring seamless performance and engaging user experiences. Our team leverages the latest
            technologies to build scalable and secure web solutions tailored to your unique needs.
          </div>
          <div className="font-semibold">Key Features:</div>
          <ul className="space-y-2 list-disc ml-10">
            <li>Custom Web Application Development</li>
            <li>Responsive and Mobile-First Design</li>
            <li>SEO and Performance Optimization</li>
            <li>E-commerce Solutions</li>
            <li>Content Management Systems (CMS)</li>
            <li>API Integration and Development</li>
          </ul>
        </div>
      </MotionDiv>
      <Separator />
      <MotionDiv direction="ltor" className="flex items-center gap-8">
        <div className="space-y-5">
          <div className="text-3xl font-light uppercase">Mobile Application Development</div>
          <div>
            Stay ahead in the mobile-first world with our high-performance, feature-rich mobile applications for both
            iOS and Android platforms. Our mobile app development services are tailored to provide an exceptional user
            experience, combining cutting-edge technology with intuitive design to deliver apps that captivate users and
            drive business growth.
          </div>
          <div className="font-semibold">Key Features:</div>
          <ul className="space-y-2 list-disc ml-10">
            <li>iOS and Android App Development</li>
            <li>Cross-Platform Solutions</li>
            <li>User-Centric Design</li>
            <li>Integration with Wearable Devices</li>
            <li>Mobile App Testing and Quality Assurance</li>
            <li>App Store Deployment and Marketing</li>
          </ul>
        </div>
        <Image src="/mobdev.png" alt="Service offered" width={2048} height={1542} className="w-96 h-fit" />
      </MotionDiv>
      <Separator />
      <MotionDiv direction="rtol" className="flex items-center gap-8">
        <Image src="/deskdev.webp" alt="Service offered" width={2048} height={1542} className="w-96 h-fit" />
        <div className="space-y-5">
          <div className="text-3xl font-light uppercase">Desktop Application Development</div>
          <div>
            Empower your business with our powerful, user-friendly desktop applications designed for various operating
            systems, including Windows, macOS, and Linux. Whether you need a standalone application or a complex
            enterprise solution, our desktop application development services ensure robust performance, enhanced
            security, and seamless integration with existing systems.
          </div>
          <div className="font-semibold">Key Features:</div>
          <ul className="space-y-2 list-disc ml-10">
            <li>Custom Desktop Software Development</li>
            <li>Cross-Platform Development</li>
            <li>Integration with Existing Systems</li>
            <li>Robust Security Features</li>
            <li>Performance Optimization</li>
            <li>Maintenance and Support</li>
          </ul>
        </div>
      </MotionDiv>
    </div>
  );
}
