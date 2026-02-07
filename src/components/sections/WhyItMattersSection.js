"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/data/constants";

const RECOMMENDATIONS = [
    {
        title: "Prioritize LGBTQ+ mental health outreach",
        action: "Target awareness campaigns and low-barrier counseling services to bisexual and LGBTQ+ communities showing severe unmet mental health needs.",
    },
    {
        title: "Expand coverage access points",
        action: "Focus insurance enrollment efforts on the uninsured, who face medical access barriers at 3x the rate of insured populations.",
    },
    {
        title: "Integrate disability accommodations",
        action: "Ensure healthcare facilities address both physical and mental health access for populations with disabilities.",
    },
];

export function WhyItMattersSection() {
    return (
        <section id={SECTION_IDS.matters} className="bg-white border-b border-slate-200">
            <div className="section-container">
                <AnimatedSection>
                    <SectionHeading
                        title="Why It Matters"
                        description="Actionable prioritization, not policy promises."
                    />
                </AnimatedSection>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    {RECOMMENDATIONS.map((rec, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <div className="card h-full">
                                <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-4">
                                    <span className="font-mono font-bold text-sm">{i + 1}</span>
                                </div>
                                <h3 className="font-serif text-lg text-foreground mb-3">
                                    {rec.title}
                                </h3>
                                <p className="text-foreground-secondary text-sm">
                                    {rec.action}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
