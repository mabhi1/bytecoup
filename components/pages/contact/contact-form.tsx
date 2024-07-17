"use client";

import React, { createRef, useEffect, useState, useTransition } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Loader2, MessageCircleIcon } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import MotionDiv from "@/components/ui/motion-div";
import * as z from "zod";
import { messageSchema } from "@/schema/message-schema";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { createMessageAction } from "@/actions/message-actions";
import { toast } from "sonner";
import { verifyRecaptcha } from "@/actions/recaptcha";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [reCaptcha, setReCaptcha] = useState<string | null>();
  const reCaptchaRef = createRef<ReCAPTCHA>();

  useEffect(() => {
    if (reCaptcha === null) reCaptchaRef.current?.reset();
  }, [reCaptcha, reCaptchaRef]);

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const handleFormSubmit = (values: z.infer<typeof messageSchema>) => {
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
        const { data, error } = await createMessageAction(values);
        if (error) toast.error("Error in sending message");
        else {
          toast.success("Message sent successfully");
          form.reset();
          setAcceptTerms(false);
          setReCaptcha(null);
        }
      } catch (error) {
        toast.error("Error in sending message");
      }
    });
  };

  return (
    <Form {...form}>
      <div className="flex justify-between items-start">
        <form className="my-8 max-w-lg w-full" onSubmit={form.handleSubmit(handleFormSubmit)}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <Label htmlFor="firstname">
                    First name<span className="text-destructive dark:text-red-300">*</span>
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
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <Label htmlFor="lastName">
                    Last name<span className="text-destructive dark:text-red-300">*</span>
                  </Label>
                  <FormControl>
                    <Input {...field} id="lastname" placeholder="Durden" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <Label htmlFor="email">
                  Email Address<span className="text-destructive dark:text-red-300">*</span>
                </Label>
                <FormControl>
                  <Input {...field} id="email" placeholder="projectmayhem@fc.com" type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mb-4">
                <Label htmlFor="message">
                  Message<span className="text-destructive dark:text-red-300">*</span>
                </Label>
                <FormControl>
                  <Textarea {...field} id="message" placeholder="Type your message here." rows={8} />
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
              <MessageCircleIcon className="w-5 mr-1" />
              Send Message
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
            src="/contact-us.webp"
            width={675}
            height={450}
            alt="Contact Us"
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
