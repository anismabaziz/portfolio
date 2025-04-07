import { useState } from "react";

import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-[15vh] w-full items-center justify-center p-4">
      <nav
        className={cn(
          "fixed z-50 flex w-full max-w-3xl items-center justify-between rounded-full px-6 py-3",
          "bg-transparent backdrop-blur-md backdrop-saturate-150",
          "border border-white/20",
          "shadow-[0_0_15px_rgba(149,128,255,0.2)]",
          "before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-r before:from-violet-500/10 before:to-cyan-500/10 before:opacity-50"
        )}
      >
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex w-full justify-around">
          {["Home", "Features", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative z-20 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <Menu className="h-5 w-5 text-white" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute inset-x-0 top-full mt-4 rounded-2xl border border-white/10 bg-transparent backdrop-blur-md p-6 md:hidden">
            <div className="flex flex-col space-y-4">
              {["Home", "Features", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
