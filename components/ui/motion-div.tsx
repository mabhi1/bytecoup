"use client";

import { motion } from "framer-motion";

export default function MotionDiv({
  children,
  direction = "rtol",
  className = "",
}: {
  children: React.ReactNode;
  direction?: "ltor" | "rtol" | "ttob" | "btot";
  className?: string;
}) {
  let initial = {
    ltor: {
      x: -50,
    },
    rtol: {
      x: 50,
    },
    ttob: {
      y: -50,
    },
    btot: {
      y: 50,
    },
  };

  let whileInView = {
    ltor: {
      x: 0,
    },
    rtol: {
      x: 0,
    },
    ttob: {
      y: 0,
    },
    btot: {
      y: 0,
    },
  };
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...initial[direction],
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
        },
        ...whileInView[direction],
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
