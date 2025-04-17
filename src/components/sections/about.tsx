import { Globe } from "lucide-react";
import { Button } from "../ui/button";

export default function About() {
  return (
    <div className="border rounded-2xl p-4 min-h-[500px] space-y-10">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Globe size={20} />
          <p className="font-medium text-lg">ABOUT ME</p>
        </div>
        <h1 className="text-4xl font-bold">hey, I'm Anis👋</h1>
        <p className="w-2/3 text-lg">
          Passionate FullStack Web Developer from Bangalore, pushing the
          boundaries of web technology to create immersive digital experiences.
        </p>
      </div>
      <Button className="rounded-sm cursor-pointer">Contact Me</Button>
    </div>
  );
}
