import Nav from "@/components/layout/Nav";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Stack from "@/components/home/Stack";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Nav />
      <main className="flex-1 pt-14">
        <Hero />
        <Projects />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
