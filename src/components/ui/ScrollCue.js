"use client";
import { motion } from "framer-motion";

export function ScrollCue({ text = "Scroll to explore" }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-foreground-tertiary"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="text-sm uppercase tracking-widest">{text}</span>
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </motion.div>
  );
}
