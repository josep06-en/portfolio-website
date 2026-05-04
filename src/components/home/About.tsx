export default function About() {
  const stats = [
    { label: "Location", value: "Valencia, Spain" },
    { label: "Education", value: "UPV Telecom Engineering" },
    { label: "English", value: "B2 technical communication" },
    { label: "Availability", value: "Remote Jun 2025", accent: true },
    { label: "Focus", value: "Solutions &amp; Product Eng" },
    { label: "Markets", value: "US / Europe / Remote", border: false }
  ];

  return (
    <section className="py-20 border-t border-b-0" id="about">
      <div className="max-w-[1080px] mx-auto px-10 relative z-1">
        {/* Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs font-normal text-t-3 tracking-widest uppercase mb-8">
          About
          <div className="flex-1 h-px bg-b-1"></div>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div className="space-y-4">
            <p className="text-base font-light text-t-2 leading-[1.75]">
              I'm a <strong className="font-medium text-t-1">Telecommunications Engineering student</strong> at UPV Valencia with hands-on experience building Python tools that real users actually use.
            </p>
            <p className="text-base font-light text-t-2 leading-[1.75]">
              I work at the intersection of <strong className="font-medium text-t-1">engineering and product</strong> I care as much about the problem being solved as about the code solving it.
            </p>
            <p className="text-base font-light text-t-2 leading-[1.75]">
              I integrate AI natively into everything I build: not as a feature, but as part of how I work and what I ship.
            </p>
            <p className="text-base font-light text-t-2 leading-[1.75]">
              Looking for <strong className="font-medium text-t-1">remote roles</strong> in Solutions Engineering or Product Engineering where I can own problems end-to-end.
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="flex flex-col gap-0.5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex items-center justify-between py-3 ${
                  stat.border !== false ? "border-b border-b-0" : ""
                }`}
              >
                <span className="font-mono text-xs text-t-3 tracking-widest uppercase">
                  {stat.label}
                </span>
                <span 
                  className={`font-display text-sm font-medium ${
                    stat.accent ? "text-accent" : "text-t-1"
                  }`}
                >
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
