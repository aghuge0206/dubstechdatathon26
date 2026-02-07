"use client";

import { TEAM, SECTION_IDS } from "@/data/constants";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Team */}
          <div>
            <h4 className="font-serif text-lg mb-3">Team 25</h4>
            <ul className="space-y-1 text-slate-400">
              {TEAM.members.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-3">Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={TEAM.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  GitHub Repository →
                </a>
              </li>
              <li>
                <a
                  href="/data/care_gap_ranked.json"
                  download
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Download Ranked Data (JSON) →
                </a>
              </li>
              <li>
                <a
                  href="/data/care_gap_ranked.csv"
                  download
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Download Ranked Data (CSV) →
                </a>
              </li>
            </ul>
          </div>

          {/* Data Source */}
          <div>
            <h4 className="font-serif text-lg mb-3">Data Source</h4>
            <p className="text-slate-400 text-sm">
              National Health Interview Survey (NHIS), Access to Care Dataset.
              National Center for Health Statistics.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-slate-500 text-sm">
          {TEAM.event} • Data Analysis Track
        </div>
      </div>
    </footer>
  );
}
