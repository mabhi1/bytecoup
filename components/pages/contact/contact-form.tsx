"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { MessageCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex justify-between items-start">
      <form className="my-8 max-w-lg w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message here." rows={8} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 flex-row items-center gap-2 space-y-1">
          <Checkbox id="terms" />
          <Label htmlFor="terms">
            Accept{" "}
            <Button variant="link" className="p-0" asChild>
              <Link href="/terms&conditions">terms and conditions.</Link>
            </Button>{" "}
          </Label>
        </LabelInputContainer>

        <Button type="submit" className="w-full">
          <MessageCircleIcon className="w-5 mr-1" />
          Send Message
        </Button>
      </form>
      <Image src="/contact-us.webp" width={675} height={450} alt="Contact Us" className="w-[35rem] h-auto" />
    </div>
  );
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
