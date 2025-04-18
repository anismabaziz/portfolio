import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Footer from "@/components/sections/footer";
import Contact from "@/components/sections/contact";
import Projects from "@/components/sections/projects";

export default function App() {
  return (
    <div className="w-3/4 mx-auto font-mono">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
