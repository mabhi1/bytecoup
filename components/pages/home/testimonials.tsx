import TestimonailCards from "@/components/pages/home/testimonial-cards";
import { testimonials } from "@/lib/strings/testimonials";

export function Testimonials() {
  return (
    <div className="rounded-md flex flex-col py-10 antialiased bg-transparent items-center justify-center overflow-hidden">
      <div className="text-2xl md:text-3xl font-light uppercase mb-5 md:mb-8">Client testimonials</div>
      <TestimonailCards items={testimonials} />
    </div>
  );
}
