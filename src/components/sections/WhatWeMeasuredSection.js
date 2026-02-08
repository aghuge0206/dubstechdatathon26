"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MetricCard } from "@/components/ui/MetricCard";
import { SECTION_IDS } from "@/data/constants";

const METRICS = [
  {
    id: "medical",
    title: "Unmet Medical Needs",
    field: "medical_unmet_pct",
    description: "Percentage who couldn’t afford medical care in the past year.",
    why: "The most universal healthcare access measure: when people are unable to afford a doctor, preventable conditions go untreated.",
  },
  {
    id: "mental",
    title: "Unmet Mental Health Needs",
    field: "mental_unmet_pct",
    description: "Percentage who couldn’t afford mental health care or counseling in the past year.",
    why: "This metric indicates some of the largest demographic disparities within the data, with certain groups reporting rates nearly 5 times the national average.",
  },
  {
    id: "medication",
    title: "Unmet Medication Needs",
    field: "medication_unmet_pct",
    description: "Percentage who did not take medication as prescribed to save money in the past year.",
    why: "This is the single largest cost barrier nationally, meaning that even people who can reach a provider cannot always follow through with their treatment.",
  },
];

export function WhatWeMeasuredSection({ data }) {
  return (
    <section id={SECTION_IDS.measured} className="bg-white border-b border-slate-200">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title="What We Measured"
            description="The NHIS tracked five cost-related access indicators in 2024. We narrowed them down to these three because they capture a complete failure to receive care, not just a delay or inconvenience. When someone skips medication or goes without medical or mental health treatment due to cost, the consequence is unmet need as opposed to deferred need."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {METRICS.map((metric, i) => (
            <AnimatedSection key={metric.id} delay={i * 0.1}>
              <MetricCard
                title={metric.title}
                description={metric.description}
                why={metric.why}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
