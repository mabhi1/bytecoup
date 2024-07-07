"use client";

import React, { createRef, useEffect, useState, useTransition } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Loader2, SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { careersSchema } from "@/schema/careers-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";
import { verifyRecaptcha } from "@/actions/recaptcha";
import { createCareerAction } from "@/actions/careers-actions";

export function CareerForm() {
  const [isPending, startTransition] = useTransition();
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [reCaptcha, setReCaptcha] = useState<string | null>();
  const reCaptchaRef = createRef<ReCAPTCHA>();

  useEffect(() => {
    if (reCaptcha === null) reCaptchaRef.current?.reset();
  }, [reCaptcha, reCaptchaRef]);

  const handleFormSubmit = (values: z.infer<typeof careersSchema>) => {
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
        const { data, error } = await createCareerAction(values);
        if (error) toast.error("Error in sending application");
        else {
          toast.success("Application sent successfully");
          form.reset();
          setAcceptTerms(false);
          setReCaptcha(null);
        }
      } catch (error) {
        toast.error("Error in sending application");
      }
    });
  };

  const form = useForm<z.infer<typeof careersSchema>>({
    resolver: zodResolver(careersSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  return (
    <Form {...form}>
      <form
        className="my-8 max-w-lg w-full border p-5 md:p-12 rounded-2xl bg-white/50 dark:bg-black/50 backdrop-blur"
        onSubmit={form.handleSubmit(handleFormSubmit)}
      >
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <Label htmlFor="firstname">First name</Label>
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
                <Label htmlFor="lastName">Last name</Label>
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
              <Label htmlFor="email">Email Address</Label>
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
              <Label htmlFor="message">Briefly describe yourself and technologies you have worked in.</Label>
              <FormControl>
                <Textarea
                  {...field}
                  id="message"
                  placeholder="I am a React developer with over 6 years of experience...."
                  rows={8}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LabelInputContainer className="mb-4 space-y-2">
          <Label htmlFor="resume">Upload resume</Label>
          <Input id="resume" type="file" accept="application/pdf" name="resume" />
        </LabelInputContainer>
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
              <Link href="/terms&conditions">terms and conditions.</Link>
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
            <SendIcon className="w-5 mr-1" />
            Apply
          </Button>
        ) : (
          <Button disabled className="w-full">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        )}
      </form>
    </Form>
  );
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
