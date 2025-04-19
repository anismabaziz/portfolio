import { Globe } from "lucide-react";

export default function Hero() {
  return (
    <div className="border rounded-2xl p-6 min-h-[500px] space-y-10">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Globe size={20} />
          <p className="font-medium md:text-lg text-md">ABOUT ME</p>
        </div>
        <h1 className="md:text-4xl text-2xl font-bold">hey, I'm Anis 👋</h1>
        <p className="md:w-2/3 md:text-lg text-md">
          a computer science student, full-stack web developer, and AI/ML
          enthusiast. I like building stuff
        </p>
      </div>
    </div>
  );
}
