import { notFound } from "next/navigation";
import { getWritingBySlug, getAllWriting } from "@/content";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  const writing = getAllWriting();
  return writing.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getWritingBySlug(params.slug);
  
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} · Josep Enrique Llopis`,
    description: article.excerpt,
  };
}

export default function WritingPage({ params }: { params: { slug: string } }) {
  const article = getWritingBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Nav />
      <main className="flex-1">
        {/* Header */}
        <section className="py-20">
          <div className="max-w-[800px] mx-auto px-10 relative z-1">
            <div className="flex items-center gap-3 font-mono text-xs font-normal text-t-3 tracking-widest uppercase mb-8">
              {article.date} · {article.readTime} read
              <div className="flex-1 h-px bg-b-1"></div>
            </div>
            <h1 className="font-display text-5xl font-black text-t-0 tracking-[-0.02em] leading-[0.96] mb-6">
              {article.title}
            </h1>
            <p className="font-body text-lg font-light text-t-2 leading-[1.7] mb-8">
              {article.excerpt}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 border-t border-b-0">
          <div className="max-w-[800px] mx-auto px-10 relative z-1">
            <div className="prose prose-invert max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="font-body text-base font-light text-t-2 leading-[1.75] mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Back Navigation */}
        <section className="py-20 border-t border-b-0">
          <div className="max-w-[1080px] mx-auto px-10 relative z-1">
            <div className="flex flex-col items-center gap-8">
              <a
                href="/#writing"
                className="font-mono text-xs text-t-3 no-underline tracking-widest uppercase transition-colors hover:text-t-1"
              >
                Back to writing
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
