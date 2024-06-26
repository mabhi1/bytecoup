import FAQSections from "@/components/pages/faq/faq-sections";
import { faqs } from "@/lib/strings/faq";

export default function FAQ() {
  return (
    <div className="py-16">
      <div className="text-3xl font-light uppercase">Frequently Asked Questions (FAQs)</div>
      {faqs.map((section) => (
        <FAQSections title={section.title} queries={section.queries} key={section.title} />
      ))}
    </div>
  );
}
