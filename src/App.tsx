import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import About from "@/components/sections/about";
export default function App() {
  return (
    <div className="w-3/4 mx-auto font-mono">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
