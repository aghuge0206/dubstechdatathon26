import { SECTION_IDS } from "@/data/constants";

export function Footer({ data }) {
  return (
    <footer id={SECTION_IDS.footer} className="border-t border-white/10">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-serif text-lg text-foreground mb-2">{data.team}</div>
            <div className="text-foreground-tertiary text-sm">{data.event}</div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-foreground-tertiary mb-2">
              Data Source
            </div>
            <div className="text-foreground-secondary text-sm leading-relaxed">
              {data.dataSource}
            </div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-foreground-tertiary mb-2">
              Citation
            </div>
            <div className="text-foreground-secondary text-sm leading-relaxed">
              {data.dataCitation}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-foreground-tertiary text-xs">
          Built for {data.event}
        </div>
      </div>
    </footer>
  );
}
