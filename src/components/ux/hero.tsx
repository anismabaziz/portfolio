import Aurora from "@/components/bits/aurora-background";
import ASCIIText from "@/components/bits/ascii-text";
import { Button } from "../ui/button";
import Navbar from "./navbar";
export default function Hero() {
  return (
    <div className="h-screen w-screen relative">
      <div className="absolute inset-0 -z-10">
        <Aurora />
      </div>
      <div className="relative z-10 h-full text-white container mx-auto flex flex-col gap-10">
        <Navbar />
        <div className="flex items-center justify-between">
          <div className="space-y-5">
            <h1 className="text-6xl font-bold flex flex-col  items-start">
              <span>I'm Anis</span>
              <span>I like building things</span>
            </h1>
            <p>
              Fullstack Web Developer exploring the future of AI through smart,
              scalable applications.
            </p>
            <a href="mailto:anismabaziz@gmail.com">
              <Button
                className="cursor-pointer rounded-4xl py-4 px-8"
                variant={"outline"}
                size={"lg"}
              >
                Contact
              </Button>
            </a>
          </div>

          <div className="relative z-10 h-[500px] w-[500px]  rounded-3xl border">
            <ASCIIText text="Hey!" enableWaves={true} asciiFontSize={8} />
          </div>
        </div>
      </div>
    </div>
  );
}
