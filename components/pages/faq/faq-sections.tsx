import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FAQSection = {
  title: string;
  queries: {
    question: string;
    answer: string;
  }[];
};

export default function FAQSections({ title, queries }: FAQSection) {
  return (
    <>
      <div className="mt-8 mb-4 text-xl uppercase">{title}</div>
      <Accordion type="single" collapsible className="w-full">
        {queries.map((query) => (
          <AccordionItem value={query.question} key={query.question}>
            <AccordionTrigger className="font-light">{query.question}</AccordionTrigger>
            <AccordionContent>{query.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
