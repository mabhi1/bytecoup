"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MotionDiv from "@/components/ui/motion-div";
import { LockIcon, MailIcon } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const credentialsAction = (formData: FormData) => {
    signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: true,
      redirectTo: "/dashboard",
    });
  };

  return (
    <MotionDiv direction="btot" className="flex items-center justify-center py-10 md:py-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-6xl px-4">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-light">Welcome Back</h1>
            <p className="text-muted-foreground">
              Access your business dashboard to manage your website content and settings.
            </p>
          </div>

          <form action={credentialsAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="credentials-email" className="text-base">
                Email Address
              </Label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="email"
                  id="credentials-email"
                  name="email"
                  placeholder="business@example.com"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="credentials-password" className="text-base">
                Password
              </Label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="password"
                  id="credentials-password"
                  name="password"
                  placeholder="••••••••"
                  className="pl-10"
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
        </div>

        <div className="w-full md:w-1/2">
          <MotionDiv direction="rtol">
            <Image
              src="/dashboard-preview.webp"
              width={600}
              height={400}
              alt="Dashboard Preview"
              className="w-full h-auto rounded-lg"
            />
          </MotionDiv>
        </div>
      </div>
    </MotionDiv>
  );
}
