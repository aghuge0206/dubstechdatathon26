"use client";

import { motion } from "framer-motion";
import { DataStatus } from "@/components/ui/DataStatus";
import { KeyFindingCard } from "@/components/ui/KeyFindingCard";
import { RubricTag } from "@/components/ui/RubricTag";
import { SECTION_IDS, TEAM } from "@/data/constants";

export function HeroSection({ data, isPlaceholder }) {
  const topGroup = data[0];

  return (
    <section
      id={SECTION_IDS.hero}
      className="bg-background-secondary border-b border-slate-200"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono text-foreground-tertiary uppercase tracking-wider">
              {TEAM.track}
            </span>
            <span className="text-foreground-tertiary">•</span>
            <span className="text-sm font-mono text-foreground-tertiary">
              Team 25
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 max-w-3xl">
            Who's getting blocked from healthcare?
          </h1>

          <p className="text-lg text-foreground-secondary max-w-2xl mb-6">
            We ranked <strong className="text-foreground">{data.length} demographic subgroups</strong> by
            how severely they're blocked from accessing care.
            One score. One clear answer.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <DataStatus isPlaceholder={isPlaceholder} />
            <RubricTag label="Metric Created" />
            <RubricTag label="Entities Ranked" />
          </div>
        </motion.div>

        {/* Key Finding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <KeyFindingCard topGroup={topGroup} />
        </motion.div>
      </div>
    </section>
  );
}
