import { privacyPolicies } from "@/lib/strings/privacy-policy";
import { SwatchBookIcon } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="py-16 space-y-8">
      {privacyPolicies.map((policy) => (
        <div key={policy.heading} className="space-y-2">
          <div className="text-2xl font-light uppercase flex items-center gap-1">
            <SwatchBookIcon className="w-5" />
            {policy.heading}
          </div>
          {policy.policyPoints.map((points) => (
            <div key={points.title} className="space-y-2">
              {points.title && <div className="uppercase">{points.title}</div>}
              <div className="text-muted-foreground">{points.description}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
