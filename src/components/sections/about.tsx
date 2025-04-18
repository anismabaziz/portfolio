import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function About() {
  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 5 },
  };
  return (
    <div className="mt-10 h-[60vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-5">
        <div className="flex flex-col gap-5 justify-center">
          <h3 className="text-2xl font-semibold">
            About me<span className="text-blue-200">.</span>
          </h3>
          <p>
            I have been coding for over 5 years, beginning my journey in 2020.
            Initially, I learned HTML, CSS, and JavaScript to build websites.
          </p>
          <p>
            My first project was a simple website built with HTML, CSS, and
            JavaScript (~mid-2020).
          </p>
          <p>
            As I progressed, I focused heavily on React.js and Next.js. Now, I
            specialize in building SaaS applications with modern web
            technologies.
          </p>
          <div className="flex items-center gap-5">
            <motion.div
              initial="initial"
              whileHover="hover"
              className="inline-block"
            >
              <Button className="rounded-sm cursor-pointer bg-blue-400 text-white hover:bg-blue-600 text-md">
                <i className="devicon-github-original text-xl mr-1"></i>
                View my Github
                <motion.span
                  variants={arrowVariants}
                  transition={{ type: "tween" }}
                >
                  <ArrowRight />
                </motion.span>
              </Button>
            </motion.div>
            <motion.div
              initial="initial"
              whileHover="hover"
              className="inline-block"
            >
              <Button className="rounded-sm cursor-pointer bg-[var(--button)] text-[var(--text)] hover:bg-[var(--button-hover)] text-md">
                Contact Me
                <motion.span
                  variants={arrowVariants}
                  transition={{ type: "tween" }}
                >
                  <ArrowRight />
                </motion.span>
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="border rounded-2xl"></div>
      </div>
    </div>
  );
}
