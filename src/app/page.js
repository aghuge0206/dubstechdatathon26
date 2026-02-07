"use client";

import { useState, useEffect } from "react";
import { getCareGapData } from "@/lib/getCareGapData";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatWeMeasuredSection } from "@/components/sections/WhatWeMeasuredSection";
import { HowScoreWorksSection } from "@/components/sections/HowScoreWorksSection";
import { RankingsSection } from "@/components/sections/RankingsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { WhyItMattersSection } from "@/components/sections/WhyItMattersSection";
import { LimitationsSection } from "@/components/sections/LimitationsSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [data, setData] = useState(null);
  const [isPlaceholder, setIsPlaceholder] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const result = await getCareGapData();
        setData(result.data);
        setIsPlaceholder(result.isPlaceholder);
      } catch (err) {
        setError(err.message);
      }
    }
    loadData();
  }, []);

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-foreground mb-2">Error Loading Data</h1>
          <p className="text-foreground-secondary">{error}</p>
        </div>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-foreground-secondary">Loading data...</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <main>
        <HeroSection data={data} isPlaceholder={isPlaceholder} />
        <WhatWeMeasuredSection data={data} />
        <HowScoreWorksSection />
        <RankingsSection data={data} />
        <InsightsSection data={data} />
        <WhyItMattersSection />
        <LimitationsSection />
      </main>
      <Footer />
    </>
  );
}
