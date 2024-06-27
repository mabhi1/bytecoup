import TestimonailCards from "@/components/pages/home/testimonial-cards";
import { testimonials } from "@/lib/strings/testimonials";

export function Testimonials() {
  return (
    <div className="rounded-md flex flex-col gap-10 py-10 antialiased bg-transparent items-center justify-center relative overflow-hidden">
      <div className="text-3xl font-light uppercase">Client testimonials</div>
      <TestimonailCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}
