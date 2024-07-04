import MotionDiv from "@/components/ui/motion-div";
import { workExamples } from "@/lib/strings/work-examples";
import Image from "next/image";

export default function WorkSamples() {
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
