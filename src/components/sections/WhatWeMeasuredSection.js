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
    description: "Percentage who needed medical care in the past 12 months but didn't get it.",
    why: "Measures direct barriers to essential healthcare services when people who need care can't access it.",
  },
  {
    id: "mental",
    title: "Unmet Mental Health Needs",
    field: "mental_unmet_pct",
    description: "Percentage who needed mental health care or counseling but didn't receive it.",
    why: "Mental health access gaps are often invisible but have cascading effects on overall well-being.",
  },
  {
    id: "medication",
    title: "Unmet Medication Needs",
    field: "medication_unmet_pct",
    description: "Percentage who needed prescription medications but couldn't afford or access them.",
    why: "Medication access is critical for managing chronic conditions and preventing health crises.",
  },
];

export function WhatWeMeasuredSection({ data }) {
  // Calculate averages across all subgroups
  const avgMedical = (data.reduce((sum, d) => sum + d.medical_unmet_pct, 0) / data.length).toFixed(1);
  const avgMental = (data.reduce((sum, d) => sum + d.mental_unmet_pct, 0) / data.length).toFixed(1);
  const avgMedication = (data.reduce((sum, d) => sum + (d.medication_unmet_pct || 0), 0) / data.length).toFixed(1);

  const averages = [avgMedical, avgMental, avgMedication];

  return (
    <section id={SECTION_IDS.measured} className="bg-white border-b border-slate-200">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title="What We Measured"
            description="Three indicators from the National Health Interview Survey that capture access barriers."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {METRICS.map((metric, i) => (
            <AnimatedSection key={metric.id} delay={i * 0.1}>
              <MetricCard
                title={metric.title}
                value={`${averages[i]}%`}
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
