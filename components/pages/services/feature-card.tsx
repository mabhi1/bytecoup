export default function FeatureCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="border border-white/85 rounded-2xl bg-slate-900/10 p-5 space-y-5 hover:scale-105 transition-transform duration-200">
      <div>{title}</div>
      <div className="text-slate-200 text-sm">{content}</div>
    </div>
  );
}
