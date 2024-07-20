"use client";

import React, { createRef, useEffect, useState, useTransition } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Loader2, MessageSquareShareIcon, StarIcon } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import * as z from "zod";
import { feedbackSchema } from "@/schema/feedback-schema";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { createFeedbackAction } from "@/actions/feedback-actions";
import { toast } from "sonner";
import { verifyRecaptcha } from "@/actions/recaptcha";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import MotionDiv from "@/components/ui/motion-div";

export function FeedbackForm({ tokenId }: { tokenId: string }) {
  const [isPending, startTransition] = useTransition();
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [reCaptcha, setReCaptcha] = useState<string | null>();
  const reCaptchaRef = createRef<ReCAPTCHA>();

  useEffect(() => {
    if (reCaptcha === null) reCaptchaRef.current?.reset();
  }, [reCaptcha, reCaptchaRef]);

  const form = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      companyName: "",
      website: "",
      designation: "",
      email: "",
      phone: "",
      overallSatisfaction: 0,
      feedback: "",
      expectationMet: true,
      suggestions: "",
      reConsider: true,
      publishable: true,
    },
  });

  const handleFormSubmit = (values: z.infer<typeof feedbackSchema>) => {
    if (!acceptTerms) {
      setTermsError(true);
      return;
    }
    if (!reCaptcha) {
      toast.error("Please verify to continue");
      return;
    }
    startTransition(async () => {
      try {
        const success = verifyRecaptcha(reCaptcha);
        if (!success) return;
        const { data, error } = await createFeedbackAction(values, tokenId);
        if (error) toast.error("Error in sending feedback");
        else {
          toast.success("Feedback sent successfully");
          form.reset();
          setAcceptTerms(false);
          setReCaptcha(null);
        }
      } catch (error) {
        toast.error("Error in sending feedback");
      }
    });
  };

  return (
    <Form {...form}>
      <div className="flex justify-between items-start">
        <form className="my-8 max-w-lg w-full" onSubmit={form.handleSubmit(handleFormSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-4">
                <Label htmlFor="firstname">
                  Name<span className="text-destructive dark:text-red-300">*</span>
                </Label>
                <FormControl>
                  <Input {...field} id="firstname" placeholder="Tyler" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="mb-4">
                <Label htmlFor="companyName">
                  Company&apos;s name<span className="text-destructive dark:text-red-300">*</span>
                </Label>
                <FormControl>
                  <Input {...field} id="companyName" placeholder="Bytecoup pvt ltd" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem className="mb-4">
                <Label htmlFor="website">Company&apos;s website</Label>
                <FormControl>
                  <Input {...field} id="website" placeholder="bytecoup.com" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="designation"
            render={({ field }) => (
              <FormItem className="mb-4">
                <Label htmlFor="designation">
                  Designation<span className="text-destructive dark:text-red-300">*</span>
                </Label>
                <FormControl>
                  <Input {...field} id="designation" placeholder="Manager" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <Label htmlFor="email">
                  Email<span className="text-destructive dark:text-red-300">*</span>
                </Label>
                <FormControl>
                  <Input {...field} id="email" placeholder="info@bytecoup.com" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="mb-4">
                <Label htmlFor="phone">Phone</Label>
                <FormControl>
                  <Input {...field} id="phone" placeholder="1234567890" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="overallSatisfaction"
            render={({ field }) => (
              <FormItem className="mb-4">
                <Label htmlFor="overallSatisfaction">
                  Rate your satisfaction with us<span className="text-destructive dark:text-red-300">*</span>
                </Label>
                <FormControl>
                  <div className="flex group w-fit">
                    {Array.from(Array(5)).map((_, idx) => (
                      <StarIcon
                        key={idx}
                        className={cn(
                          "w-8 group-hover:text-primary cursor-pointer peer peer-hover:text-foreground px-1",
                          field.value >= idx + 1 && "text-primary"
                        )}
                        onClick={() => field.onChange(idx + 1)}
                      />
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem className="mb-4">
                <Label htmlFor="feedback">Feedback</Label>
                <FormControl>
                  <Textarea {...field} id="feedback" placeholder="Type your feedback here." rows={8} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="expectationMet"
            render={({ field }) => (
              <FormItem className="mb-4">
                <Label htmlFor="expectationMet">
                  Did we meet your expectations?<span className="text-destructive dark:text-red-300">*</span>
                </Label>
                <FormControl className="flex flex-wrap gap-3 md:gap-5">
                  <RadioGroup
                    onValueChange={(e) => field.onChange(e === "yes" ? true : false)}
                    value={field.value ? "yes" : "no"}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reConsider"
            render={({ field }) => (
              <FormItem className="mb-4">
                <Label htmlFor="reConsider">
                  Would you consider us again?<span className="text-destructive dark:text-red-300">*</span>
                </Label>
                <FormControl className="flex flex-wrap gap-3 md:gap-5">
                  <RadioGroup
                    onValueChange={(e) => field.onChange(e === "yes" ? true : false)}
                    value={field.value ? "yes" : "no"}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="suggestions"
            render={({ field }) => (
              <FormItem className="mb-4">
                <Label htmlFor="suggestions">Any suggestions?</Label>
                <FormControl>
                  <Textarea {...field} id="suggestions" placeholder="Type your suggestions here." rows={8} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="publishable"
            render={({ field }) => (
              <FormItem className="mb-4">
                <Label htmlFor="publishable">
                  Can we publish your feedback in our testimonials?
                  <span className="text-destructive dark:text-red-300">*</span>
                </Label>
                <FormControl className="flex flex-wrap gap-3 md:gap-5">
                  <RadioGroup
                    onValueChange={(e) => field.onChange(e === "yes" ? true : false)}
                    value={field.value ? "yes" : "no"}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LabelInputContainer className="mb-4 flex-row items-center gap-2 space-y-1">
            <Checkbox
              id="terms"
              checked={acceptTerms}
              onCheckedChange={(checked) => {
                setAcceptTerms(checked ? true : false);
                if (checked) setTermsError(false);
              }}
            />
            <Label htmlFor="terms">
              Accept{" "}
              <Button variant="link" className="p-0 text-sm h-fit" asChild>
                <Link href="/terms&conditions">
                  terms and conditions.<span className="text-destructive dark:text-red-300">*</span>
                </Link>
              </Button>{" "}
            </Label>
            {termsError && <div className="text-sm font-medium text-destructive">Required</div>}
          </LabelInputContainer>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={setReCaptcha}
            ref={reCaptchaRef}
            className="mx-auto mb-4"
            onExpired={() => setReCaptcha(null)}
            onErrored={() => setReCaptcha(null)}
          />

          {!isPending ? (
            <Button type="submit" className="w-full">
              <MessageSquareShareIcon className="w-5 mr-1" />
              Send Feedback
            </Button>
          ) : (
            <Button disabled className="w-full">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          )}
        </form>
        <MotionDiv direction="rtol">
          <Image
            src="/feedback.png"
            width={675}
            height={450}
            alt="Feedback"
            className="w-[35rem] h-auto hidden md:block"
          />
        </MotionDiv>
      </div>
    </Form>
  );
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
