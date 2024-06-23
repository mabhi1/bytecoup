import { BadgeCheckIcon, PlayIcon } from "lucide-react";

export default function FeatureCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="border border-slate-300 rounded-2xl bg-slate-900/10 p-5 space-y-3 hover:scale-105 transition-transform duration-200">
      <div className="flex gap-2 items-center">
        <BadgeCheckIcon className="w-6 text-green-300" />
        {title}
      </div>
      <div className="text-slate-300 text-sm">{content}</div>
    </div>
  );
}
