import { Button } from "../ui/button";
import { useTheme } from "@/components/theme/theme-provider";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { setTheme, theme } = useTheme();
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
      <Button
        size="icon"
        variant={"ghost"}
        className="cursor-pointer"
        onClick={() => {
          if (theme == "dark") setTheme("light");
          if (theme == "light") setTheme("dark");
        }}
      >
        {theme == "dark" && <Sun />}
        {theme == "light" && <Moon />}
      </Button>
    </div>
  );
}
