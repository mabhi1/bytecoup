"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export function CareerForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form
      className="my-8 max-w-lg w-full border p-12 rounded-2xl bg-white/50 dark:bg-black/50 backdrop-blur"
      onSubmit={handleSubmit}
    >
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
        <Label htmlFor="message">Briefly describe yourself and technologies you have worked in.</Label>
        <Textarea id="message" placeholder="I am a React developer with over 6 years of experience...." rows={8} />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="resume">Upload resume</Label>
        <Input id="resume" type="file" accept="application/pdf" name="resume" />
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
        <SendIcon className="w-5 mr-1" />
        Apply
      </Button>
    </form>
  );
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
