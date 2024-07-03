import { termsAndConditions } from "@/lib/strings/terms-and-conditions";

export default function TermsAndConditions() {
  return (
    <div className="py-10 md:py-16 space-y-5 md:space-y-8">
      {termsAndConditions.map((term) => (
        <div key={term.heading} className="space-y-2">
          <div className="text-xl md:text-2xl font-light uppercase flex items-center gap-1 underline underline-offset-4">
            {term.heading}
          </div>
          {term.termsAndConditions.map((condition) => (
            <div key={JSON.stringify(condition.description)} className="space-y-2">
              {condition.title && <div className="uppercase">{condition.title}</div>}
              {typeof condition.description === "string" ? (
                <div className="text-muted-foreground">{condition.description}</div>
              ) : (
                <ul className="text-muted-foreground">
                  {condition.description.map((des) => (
                    <li key={des} className="list-disc list-inside">
                      {des}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
