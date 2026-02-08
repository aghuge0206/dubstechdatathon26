"use client";

import { motion } from "framer-motion";
import { DataStatus } from "@/components/ui/DataStatus";
import { SECTION_IDS, TEAM } from "@/data/constants";

export function TitleSection({ isPlaceholder }) {
  return (
    <section
      id={SECTION_IDS.title}
      className="bg-background-secondary border-b border-slate-200"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono text-foreground-tertiary uppercase tracking-wider">
              {TEAM.track}
            </span>
            <span className="text-foreground-tertiary">·</span>
            <span className="text-sm font-mono text-foreground-tertiary">
              Team 25
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 max-w-3xl">
            Care Gap Risk Score
          </h1>

          <p className="text-lg text-foreground-secondary max-w-2xl mb-6">
            Which demographic subgroups face the greatest barriers to healthcare
            access in the United States?
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <DataStatus isPlaceholder={isPlaceholder} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
