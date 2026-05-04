import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/content";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} · Josep Enrique Llopis`,
    description: project.hook,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Nav />
      <main className="flex-1">
        {/* Header */}
        <section className="py-20">
          <div className="max-w-[1080px] mx-auto px-10 relative z-1">
            <h1 className="font-display text-5xl font-black text-t-0 tracking-[-0.02em] leading-[0.96] mb-4">
              {project.title}
            </h1>
            <p className="font-body text-lg font-light text-t-2 leading-[1.7] max-w-[800px] mb-6">
              {project.hook}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs font-normal px-3 py-1.5 border border-b-2 rounded text-t-2 bg-bg-2 tracking-widest"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-20 border-t border-b-0">
          <div className="max-w-[1080px] mx-auto px-10 relative z-1">
            <div className="flex items-center gap-3 font-mono text-xs font-normal text-t-3 tracking-widest uppercase mb-8">
              The Problem
              <div className="flex-1 h-px bg-b-1"></div>
            </div>
            <div className="max-w-[800px]">
              <p className="font-body text-base font-light text-t-2 leading-[1.75]">
                {project.problem}
              </p>
            </div>
          </div>
        </section>

        {/* What I Built */}
        <section className="py-20 border-t border-b-0">
          <div className="max-w-[1080px] mx-auto px-10 relative z-1">
            <div className="flex items-center gap-3 font-mono text-xs font-normal text-t-3 tracking-widest uppercase mb-8">
              What I Built
              <div className="flex-1 h-px bg-b-1"></div>
            </div>
            <div className="max-w-[800px]">
              <p className="font-body text-base font-light text-t-2 leading-[1.75] mb-8">
                {project.whatIBuilt}
              </p>
              {project.demoImage && (
                <div className="bg-bg-1 border border-b-1 rounded-lg overflow-hidden">
                  <img 
                    src={project.demoImage} 
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 border-t border-b-0">
          <div className="max-w-[1080px] mx-auto px-10 relative z-1">
            <div className="flex items-center gap-3 font-mono text-xs font-normal text-t-3 tracking-widest uppercase mb-8">
              How It Works
              <div className="flex-1 h-px bg-b-1"></div>
            </div>
            <div className="max-w-[800px]">
              <p className="font-body text-base font-light text-t-2 leading-[1.75]">
                {project.howItWorks}
              </p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 border-t border-b-0">
          <div className="max-w-[1080px] mx-auto px-10 relative z-1">
            <div className="flex items-center gap-3 font-mono text-xs font-normal text-t-3 tracking-widest uppercase mb-8">
              Results
              <div className="flex-1 h-px bg-b-1"></div>
            </div>
            <div className="max-w-[800px]">
              <p className="font-body text-base font-light text-t-2 leading-[1.75]">
                {project.results}
              </p>
            </div>
          </div>
        </section>

        {/* What I'd Do Differently */}
        <section className="py-20 border-t border-b-0">
          <div className="max-w-[1080px] mx-auto px-10 relative z-1">
            <div className="flex items-center gap-3 font-mono text-xs font-normal text-t-3 tracking-widest uppercase mb-8">
              What I'd Do Differently
              <div className="flex-1 h-px bg-b-1"></div>
            </div>
            <div className="max-w-[800px]">
              <p className="font-body text-base font-light text-t-2 leading-[1.75]">
                {project.whatIdDoDifferently}
              </p>
            </div>
          </div>
        </section>

        {/* GitHub Button */}
        <section className="py-20 border-t border-b-0">
          <div className="max-w-[1080px] mx-auto px-10 relative z-1">
            <div className="flex flex-col items-center gap-8">
              {project.frontendUrl ? (
                <a
                  href={project.frontendUrl}
                  className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-widest uppercase px-6 border border-t-2 text-t-1 rounded no-underline transition-all hover:bg-t-0 hover:text-bg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              ) : (
                <span className="font-mono text-xs text-t-3 tracking-widest uppercase">
                  Source code coming soon
                </span>
              )}
              
              <a
                href="/#projects"
                className="font-mono text-xs text-t-3 no-underline tracking-widest uppercase transition-colors hover:text-t-1"
              >
                Back to projects
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
