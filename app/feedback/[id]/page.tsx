import { redirect } from "next/navigation";
import { FeedbackForm } from "@/components/pages/feedback/feedback-form";
import { getFeedbackTokenById } from "@/prisma/db/feedback-token-db";
import { CheckCheckIcon } from "lucide-react";

export default async function FeedbackPage({ params }: { params: { id: string } }) {
  const { data, error } = await getFeedbackTokenById(params.id);
  if (!data || error) redirect("/not-found");
  return (
    <div className="py-10 md:py-16 space-y-5">
      <div className="text-2xl md:text-3xl font-light uppercase">Give us feedback</div>
      <div>
        Thank you for working with us. We hope we were able to satisfy your needs and provide you the best experience.
        We promise to provide you a good experience further in the journey and would make sure your business stands out
        amongst the competitors. You proved to be a great client to us and would love to work again with you on some
        challenging project. Your feedback means a lot to us. It helps us to learn and grow and boosts our confidence.
      </div>
      {data.status === "created" ? (
        <FeedbackForm tokenId={params.id} />
      ) : (
        <div className="flex gap-2 text-green-600 text-lg pt-5">
          <CheckCheckIcon className="w-6 mr-1" />
          <span className="w-fit">Thank you for your feedback. Your feedback has been submitted successfully.</span>
        </div>
      )}
    </div>
  );
}
