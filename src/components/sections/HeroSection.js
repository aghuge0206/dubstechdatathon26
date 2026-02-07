"use client";
import { motion } from "framer-motion";
import { HeroStat } from "@/components/ui/HeroStat";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { SECTION_IDS } from "@/data/constants";

export function HeroSection({ data }) {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-4">
            {data.title}
          </h1>
        </motion.div>

        <motion.p
          className="text-foreground-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {data.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <HeroStat
            value={data.stat.value}
            label={data.stat.label}
            prefix={data.stat.prefix}
            suffix={data.stat.suffix}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-12 z-10">
        <ScrollCue text={data.scrollCueText} />
      </div>
    </section>
  );
}
