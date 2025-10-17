import React from "react";
import { motion } from "framer-motion";
import { cn } from "./cn";

export const Spotlight = ({ className, fill }) => {
  return (
    <motion.svg
      className={cn("pointer-events-none absolute inset-0 w-full h-full opacity-30", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.03, 1], opacity: [0.25, 0.45, 0.25] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="g" cx="30%" cy="20%" r="70%">
          <stop offset="0%" stopColor={fill || "#ffffff"} stopOpacity="0.35" />
          <stop offset="40%" stopColor={fill || "#ffffff"} stopOpacity="0.12" />
          <stop offset="100%" stopColor={fill || "#ffffff"} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="600" fill="url(#g)" />
    </motion.svg>
  );
};