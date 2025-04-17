import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="h-[10vh] flex items-center justify-between">
      <div className="text-2xl font-bold">
        AB<span className="text-blue-300">.</span>
      </div>
      <div>
        <Button variant={"ghost"} className="cursor-pointer">
          Home
        </Button>
        <Button variant={"ghost"} className="cursor-pointer">
          My Work
        </Button>
      </div>
    </div>
  );
}
