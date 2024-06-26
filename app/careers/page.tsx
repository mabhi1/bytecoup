import { CareerForm } from "@/components/pages/careers/career-form";
import Image from "next/image";

export default function Careers() {
  return (
    <div className="py-16">
      <div className="text-3xl font-light uppercase">Work with us</div>
      <div>
        Share your resume along with a little bit about yourself using the form below. We will reach out to you if you
        are a good fit to the team.
      </div>
      <div className="flex flex-col-reverse items-center relative mt-28">
        <CareerForm />
        <Image
          src="/career.webp"
          width={464}
          height={640}
          alt="Careers"
          className="w-40 h-auto absolute -top-24 left-1/2 -translate-x-1/2 -z-10"
        />
      </div>
    </div>
  );
}
