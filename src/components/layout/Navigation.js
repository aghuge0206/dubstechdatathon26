"use client";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAV_LABELS } from "@/data/constants";

export function Navigation() {
  const sectionIds = NAV_LABELS.map((n) => n.id);
  const activeId = useActiveSection(sectionIds);

  return (
    <nav className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {NAV_LABELS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="group flex items-center gap-3 justify-end"
          aria-label={item.label}
        >
          <span
            className={`text-xs font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
              activeId === item.id ? "text-accent-teal" : "text-foreground-tertiary"
            }`}
          >
            {item.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              activeId === item.id
                ? "w-3 h-3 bg-accent-teal"
                : "w-2 h-2 bg-foreground-tertiary/50 group-hover:bg-foreground-tertiary"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
