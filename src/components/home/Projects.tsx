import { getFeaturedProjects } from "@/content";

export default function Projects() {
  const projects = getFeaturedProjects();

  return (
    <section className="py-20" id="projects">
      <div className="max-w-[1080px] mx-auto px-10 relative z-1">
        {/* Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs font-normal text-t-3 tracking-widest uppercase mb-8">
          Selected projects
          <div className="flex-1 h-px bg-b-1"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-b-1 border border-b-1 rounded-lg overflow-hidden p-1">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="bg-bg-1 p-10 cursor-pointer transition-all duration-150 flex flex-col relative group min-h-[400px]"
            >
              {/* Arrow */}
              <span className="absolute top-6 right-6 text-base text-t-3 transition-all duration-150 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ?
              </span>

              {/* Project Number */}
              <div className="font-mono text-xs font-normal text-t-3 tracking-widest mb-5">
                0{index + 1} · {project.date}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-t-0 leading-[1.25] mb-4 tracking-[-0.01em]">
                {project.title}
              </h3>

              {/* Hook */}
              <p className="text-base font-light text-t-2 leading-[1.6] mb-8 flex-1 border-l-2 border-b-2 pl-4 italic">
                {project.hook}
              </p>

              {/* Stack */}
              <div className="flex gap-2 flex-wrap mb-8">
                {project.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-sm font-normal px-3 py-1.5 border border-b-1 rounded text-t-3 bg-bg-2 tracking-widest"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {(project.slug === "sales-dashboard" || project.slug === "market-intelligence-engine" || project.slug === "enterprise-knowledge-retrieval" || project.slug === "intelligent-job-matching") && project.frontendUrl && project.appUrl ? (
                  <>
                    <a
                      href={project.frontendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 font-mono text-sm font-medium px-4 py-3 bg-[#00e676] text-black rounded no-underline transition-all duration-200 text-center hover:bg-[#00e676]/90"
                    >
                      See on GitHub
                    </a>
                    <a
                      href={project.appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 font-mono text-sm font-medium px-4 py-3 bg-[#00e676] text-black rounded no-underline transition-all duration-200 text-center hover:bg-[#00e676]/90"
                    >
                      Go to the app
                    </a>
                  </>
                ) : (
                  <a
                    href={`/projects/${project.slug}`}
                    className="flex-1 font-mono text-sm font-medium px-4 py-3 border border-b-2 text-t-1 rounded no-underline transition-all duration-200 text-center hover:border-b-3 hover:text-t-0"
                  >
                    View project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
