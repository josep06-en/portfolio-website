"use client";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-14 flex items-center justify-between px-10 bg-bg/72 backdrop-blur-md border-b border-b-1">
      <div className="font-mono text-[13px] font-medium text-t-0 tracking-[0.04em]">
        JEL<span className="text-accent">_</span>
      </div>
      
      <div className="flex items-center gap-8">
        <a href="#projects" className="font-mono text-[12px] font-normal text-t-2 no-underline tracking-[0.06em] uppercase transition-colors duration-150 hover:text-t-0">
          Projects
        </a>
        <a href="#stack" className="font-mono text-[12px] font-normal text-t-2 no-underline tracking-[0.06em] uppercase transition-colors duration-150 hover:text-t-0">
          Stack
        </a>
        <a href="#contact" className="font-mono text-[12px] font-normal text-t-2 no-underline tracking-[0.06em] uppercase transition-colors duration-150 hover:text-t-0">
          Contact
        </a>
        <a 
          href="/CV Eng.pdf" 
          download
          className="font-mono text-[11px] font-medium px-4 py-1.5 border border-b-3 rounded text-t-1 no-underline tracking-[0.08em] uppercase transition-all duration-150 hover:border-accent hover:text-accent"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}
