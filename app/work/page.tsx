import MotionDiv from "@/components/ui/motion-div";
import Image from "next/image";

export default function WorkSamples() {
  const workExamples = [
    {
      src: "/engineer.png",
      alt: "We are engineers",
      href: "https://www.weareengineer.com",
    },
    {
      src: "/naukri.png",
      alt: "Sarkari Exam Hub",
      href: "https://sarkariexamshub.com",
    },
    {
      src: "/number1fan.png",
      alt: "Number 1 Fan",
      href: "https://number1fan.co/",
    },
    {
      src: "/roomie.png",
      alt: "Roomie Listings",
      href: "https://roomielistings.com",
    },
    {
      src: "/codemystery.png",
      alt: "Code Mystery",
      href: "https://codemystery.vercel.app/",
    },
  ];
  return (
    <MotionDiv direction="btot" className="py-10 md:py-16 space-y-8 md:space-y-12">
      <div className="text-2xl md:text-3xl font-light uppercase text-center">Work Samples</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {workExamples.map((site) => (
          <a
            key={site.src}
            href={site.href}
            target="_blank"
            className="border rounded hover:scale-105 transition-transform duration-200"
          >
            <Image src={site.src} alt={site.alt} width={1710} height={968} className="w-[30rem] h-auto" />
            <div className="text-center text-xs p-2">{site.alt}</div>
          </a>
        ))}
      </div>
    </MotionDiv>
  );
}
