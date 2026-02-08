"use client";

import { useMemo } from "react";

/**
 * Computes alternative rankings under different weighting schemes.
 */
function computeAlternativeRankings(data) {
  const schemes = [
    { name: "Equal (1:1:1)", weights: [1, 1, 1] },
    { name: "Medical-heavy (2:1:1)", weights: [2, 1, 1] },
    { name: "Mental-heavy (1:2:1)", weights: [1, 2, 1] },
    { name: "Medication-heavy (1:1:2)", weights: [1, 1, 2] },
  ];

  // Get min/max for normalization
  const medical = data.map(d => d.medical_unmet_pct).filter(v => v != null);
  const mental = data.map(d => d.mental_unmet_pct).filter(v => v != null);
  const medication = data.map(d => d.medication_unmet_pct).filter(v => v != null);

  const minMax = {
    medical: { min: Math.min(...medical), max: Math.max(...medical) },
    mental: { min: Math.min(...mental), max: Math.max(...mental) },
    medication: { min: Math.min(...medication), max: Math.max(...medication) },
  };

  const normalize = (val, key) => {
    const { min, max } = minMax[key];
    if (max === min) return 0;
    return (val - min) / (max - min);
  };

  return schemes.map(scheme => {
    const ranked = data
      .map(d => {
        const normMed = normalize(d.medical_unmet_pct, 'medical');
        const normMent = normalize(d.mental_unmet_pct, 'mental');
        const normMedic = normalize(d.medication_unmet_pct, 'medication');
        const score =
          normMed * scheme.weights[0] +
          normMent * scheme.weights[1] +
          normMedic * scheme.weights[2];
        return { subgroup: d.subgroup, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    return {
      name: scheme.name,
      top5: ranked,
    };
  });
}

export function SensitivityTable({ data }) {
  const rankings = useMemo(() => computeAlternativeRankings(data), [data]);

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 overflow-x-auto">
      <h4 className="font-serif text-sm text-foreground mb-3">
        How do rankings change under different weightings?
      </h4>
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="py-2 px-2 text-left text-foreground-tertiary font-mono uppercase tracking-wider">Rank</th>
            {rankings.map(r => (
              <th key={r.name} className="py-2 px-2 text-left text-foreground-tertiary font-mono uppercase tracking-wider">
                {r.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3, 4].map(i => (
            <tr key={i} className={`border-b border-slate-100 ${i < 2 ? 'bg-red-50' : ''}`}>
              <td className="py-2 px-2 font-mono text-foreground-tertiary">{i + 1}</td>
              {rankings.map(r => (
                <td key={r.name} className="py-2 px-2 text-foreground">
                  {r.top5[i]?.subgroup || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[10px] text-foreground-tertiary mt-3">
        <strong className="text-slate-600">Key finding:</strong> Bisexual and Uninsured remain in the top 2 under all weighting schemes, indicating that their scores are not sensitive to alternative weightings.
      </p>
    </div>
  );
} 
