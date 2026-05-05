import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="bg-[#EFE7DA] min-h-screen">
      <Hero />
      <ProductShowcase />
      <About />
      <TechStack />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}
