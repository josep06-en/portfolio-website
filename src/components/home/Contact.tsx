export default function Contact() {
  return (
    <section className="py-20 border-t border-b-0" id="contact">
      <div className="max-w-[1080px] mx-auto px-10 relative z-1">
        {/* Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs font-normal text-t-3 tracking-widest uppercase mb-8">
          Contact
          <div className="flex-1 h-px bg-b-1"></div>
        </div>

        {/* Contact Content */}
        <div className="text-center max-w-[600px] mx-auto">
          {/* Headline */}
          <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold text-t-0 tracking-[-0.02em] leading-[1.1] mb-4">
            If you're building something ambitious,<br />
            let's talk.
          </h2>

          {/* Sub */}
          <p className="text-base font-light text-t-2 leading-[1.6] mb-9">
            Open to remote roles in Solutions Engineering and Product Engineering. Available from June 2025.
          </p>

          {/* Primary CTA */}
          <a 
            href="mailto:jenriquellopis@gmail.com" 
            className="relative inline-flex items-center gap-2 font-mono text-[12px] font-medium tracking-[0.08em] uppercase px-6 py-3 bg-[#00e676] text-black rounded no-underline transition-all duration-200 overflow-hidden group mx-auto mb-10"
          >
            Send an email
            <span className="text-[14px]">→</span>
            <span className="absolute inset-0 bg-white/15 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
          </a>

          {/* Links */}
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://linkedin.com/in/josep-enrique-llopis" 
              className="font-mono text-xs text-t-3 no-underline tracking-widest uppercase transition-colors hover:text-t-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="w-0.5 h-0.5 rounded-full bg-b-2"></span>
            <a 
              href="https://github.com/josep06-en" 
              className="font-mono text-xs text-t-3 no-underline tracking-widest uppercase transition-colors hover:text-t-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span className="w-0.5 h-0.5 rounded-full bg-b-2"></span>
            <a 
              href="mailto:jenriquellopis@gmail.com" 
              className="font-mono text-xs text-t-3 no-underline tracking-widest uppercase transition-colors hover:text-t-1"
            >
              jenriquellopis@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
