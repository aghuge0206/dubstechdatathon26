"use client";

/**
 * Prominent card highlighting a high-risk subgroup.
 */
export function KeyFindingCard({ topGroup, rank = 1, customSummary }) {
  if (!topGroup) return null;

  return (
    <div className="card-elevated p-6">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        {/* Rank badge */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center">
            <span className="text-xl font-bold">#{rank}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h2 className="font-serif text-xl md:text-2xl text-foreground mb-1 leading-tight">
            {topGroup.subgroup}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
            {customSummary || (
              <>
                Critical care gap identified: <span className="font-semibold text-foreground">{topGroup.medical_unmet_pct}%</span> unmet medical and <span className="font-semibold text-foreground">{topGroup.mental_unmet_pct}%</span> unmet mental health needs.
              </>
            )}
          </p>
        </div>

        {/* Score display */}
        <div className="flex-shrink-0 text-left md:text-right border-l md:border-l border-slate-100 pl-6 md:pl-6">
          <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-0 font-bold">Risk Score</p>
          <p className="font-mono text-3xl font-black text-red-600">
            {topGroup.risk_score.toFixed(2)}
            <span className="text-sm text-slate-400 font-normal ml-1">/ 3.0</span>
          </p>
        </div>
      </div>
    </div>
  );
}
