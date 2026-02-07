export function ChartWrapper({ mode = "recharts", tableauUrl, title, children, className = "" }) {
  if (mode === "tableau" && tableauUrl) {
    return (
      <div className={className}>
        {title && (
          <h3 className="font-serif text-xl text-foreground mb-4">{title}</h3>
        )}
        <div className="relative w-full" style={{ paddingBottom: "60%" }}>
          <iframe
            src={tableauUrl}
            className="absolute inset-0 w-full h-full rounded-lg border border-white/10"
            frameBorder="0"
            allowFullScreen
            title={title || "Tableau visualization"}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {title && (
        <h3 className="font-serif text-xl text-foreground mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
}
