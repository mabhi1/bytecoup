import { BadgeCheckIcon } from "lucide-react";

export default function FeatureCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="border border-slate-200 dark:border-slate-500 rounded-2xl bg-slate-600/10 dark:bg-slate-900/10 p-5 space-y-3 hover:scale-105 transition-transform duration-200">
      <div className="flex gap-2 items-center">
        <BadgeCheckIcon className="w-6 text-green-800 dark:text-green-300 hidden md:block" />
        <span className="w-fit">{title}</span>
      </div>
      <div className="text-slate-600 dark:text-slate-300 text-sm">{content}</div>
    </div>
  );
}
