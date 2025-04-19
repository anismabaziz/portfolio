import { Button } from "../ui/button";
import { useTheme } from "@/components/theme/theme-provider";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  return (
    <div className="h-[10vh] flex items-center justify-between">
      <a href="/">
        <div className="text-2xl font-bold">
          AB<span className="text-blue-300">.</span>
        </div>
      </a>

      <div>
        <a href="/">
          <Button variant={"ghost"} className="cursor-pointer">
            Home
          </Button>
        </a>
        <a href="#projects">
          <Button variant={"ghost"} className="cursor-pointer">
            My Work
          </Button>
        </a>
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
