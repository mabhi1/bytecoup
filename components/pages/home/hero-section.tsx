"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";
import { ContactIcon, ServerIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="flex items-center md:mt-20 md:mb-28">
      <div className="w-full lg:w-[65%] hidden md:block">
        <LampContainer>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-br from-slate-300 to-slate-500 text-center lg:text-left bg-clip-text text-5xl font-medium tracking-tight text-transparent"
          >
            Creating memorable online experiences that help your <span className="text-primary">Business</span> stand
            out.
          </motion.div>
        </LampContainer>
        <div className="flex gap-5 px-5 pt-5 justify-center lg:justify-start">
          <Link href="/services" passHref legacyBehavior>
            <Button>
              <ServerIcon className="w-4 mr-1" />
              Our Services
            </Button>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <Button variant="secondary">
              <ContactIcon className="w-4 mr-1" />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <div className="my-28 md:hidden bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-5xl font-medium tracking-tight text-transparent">
        Creating Memorable Online Experiences That Help Your <span className="text-primary">Business</span> Stand Out.
      </div>
      <div className="w-[35%] hidden lg:block">
        <Image src="/hero-image.webp" width={1920} height={1920} alt="Delite Solutions" />
      </div>
    </div>
  );
}
