import Image from "next/image";
import FeatureCard from "./feature-card";

type Service = {
  heading: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  features: {
    title: string;
    content: string;
  }[];
};

export default function ServiceCard({ heading, description, image, features }: Service) {
  return (
    <div className="w-full space-y-8 overflow-hidden relative h-full rounded-2xl p-5 md:p-10 text-black dark:text-white bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-700 dark:to-blue-900">
      <div className="flex items-center flex-row-reverse gap-8">
        <div className="space-y-5">
          <p className="text-2xl md:text-3xl font-light uppercase">{heading}</p>
          <div className="text-slate-800 dark:text-slate-300">{description}</div>
        </div>
        <Image src={image.src} alt={image.alt} width={2048} height={1542} className="h-44 w-auto hidden md:block" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} title={feature.title} content={feature.content} />
        ))}
      </div>
    </div>
  );
}
