"use client";

export default function Hero() {
  return (
    <section className="relative py-[160px]">
      <div className="hero-glow"></div>
      
      <div className="max-w-[1080px] mx-auto px-10 relative z-1">
        
        {/* Name */}
        <h1 className="font-display text-[clamp(44px,6vw,76px)] font-black leading-[0.96] text-t-0 tracking-[-0.02em] mb-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Josep<br />
          Enrique<br />
          <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.3)] relative">
            Llopis
          </span>
        </h1>

        {/* Role */}
        <p className="font-display text-[clamp(28px,4vw,48px)] font-normal text-t-2 tracking-[-0.02em] mb-8 leading-[1.1] animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Python Developer<br />
          <em className="font-normal not-italic text-accent">Solutions &amp; Product Engineering</em>
        </p>

        {/* Description */}
        <p className="text-base font-light text-t-2 leading-[1.7] max-w-[540px] mb-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          I build tools that solve real problems from the API call to the business outcome. Telecom Engineering @ UPV. AI-native workflows.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4 flex-wrap mb-14 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a 
            href="#projects" 
            className="relative inline-flex items-center gap-2 font-mono text-[12px] font-medium tracking-[0.08em] uppercase px-6 py-3 bg-[#00e676] text-black rounded no-underline transition-all duration-200 overflow-hidden group"
          >
            View projects
            <span className="text-[14px]">↓</span>
            <span className="absolute inset-0 bg-white/15 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 font-mono text-[12px] font-normal tracking-[0.08em] uppercase px-6 py-3 border border-b-2 text-t-1 rounded no-underline transition-all duration-200 hover:border-b-3 hover:text-t-0"
          >
            Get in touch
          </a>
        </div>

        {/* Signal Strip */}
        <div className="inline-flex items-center gap-0 border border-b-1 rounded-md bg-bg-1 overflow-hidden animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center gap-1.5 px-4 py-2.5 font-mono text-xs font-normal text-t-2 tracking-widest border-r border-b-1">
            Python · REST APIs · SQL · TypeScript
          </div>
          <div className="flex items-center gap-1.5 px-4 py-2.5 font-mono text-xs font-normal text-t-2 tracking-widest border-r border-b-1">
            FastAPI
          </div>
          <div className="flex items-center gap-1.5 px-4 py-2.5 font-mono text-xs font-normal text-t-2 tracking-widest border-r border-b-1">
            AI-native
          </div>
          <div className="flex items-center gap-1.5 px-4 py-2.5 font-mono text-xs font-normal text-accent tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
            Opened to Work
          </div>
        </div>
      </div>
    </section>
  );
}
