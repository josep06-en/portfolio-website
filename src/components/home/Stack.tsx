export default function Stack() {
  const stackData = [
    {
      icon: "",
      name: "Build",
      items: [
        "Python (advanced)",
        "REST APIs requests lib",
        "FastAPI",
        "SQL intermediate",
        "TypeScript (basic)",
        "Git"
      ]
    },
    {
      icon: "",
      name: "Analyse",
      items: [
        "Pandas",
        "ETL pipelines",
        "Exploratory analysis",
        "KPI dashboard design"
      ]
    },
    {
      icon: "",
      name: "AI-native",
      items: [
        "Prompt engineering",
        "GitHub Copilot",
        "Windsurf",
        "LLM product integration"
      ]
    }
  ];

  return (
    <section className="py-20 border-t border-b-0" id="stack">
      <div className="max-w-[1080px] mx-auto px-10 relative z-1">
        {/* Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs font-normal text-t-3 tracking-widest uppercase mb-8">
          Stack
          <div className="flex-1 h-px bg-b-1"></div>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-3 gap-px bg-b-1 border border-b-1 rounded-lg overflow-hidden">
          {stackData.map((column, index) => (
            <div key={index} className="bg-bg-1 p-7 pb-8">
              {/* Column Header */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-md bg-bg-3 border border-b-2 flex items-center justify-center text-sm">
                  {column.icon}
                </div>
                <span className="font-mono text-xs font-medium text-t-0 tracking-widest uppercase">
                  {column.name}
                </span>
              </div>

              {/* Stack Items */}
              <div className="flex flex-col gap-2">
                {column.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2 text-sm font-normal text-t-2">
                    <span className="w-px h-3 bg-b-2 flex-shrink-0"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
