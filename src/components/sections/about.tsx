import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, Bot, Laptop, Terminal } from "lucide-react";

const interests = [
  {
    icon: <Laptop color="white" />,
    title: "Web Development",
    description:
      "Developing web apps that solve real-world problems effectively and intuitively.",
  },
  {
    icon: <Bot color="white" />,
    title: "AI & Machine Learning",
    description:
      "Exploring AI and machine learning to develop intelligent, real-world solutions.",
  },
];
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
            I'm a computer science student who enjoys solving problems with
            code. I like working with Python, JavaScript, and databases, and I'm
            always learning new things.
          </p>
          <p>
            I prefer practical solutions over complex ones. My focus is on
            writing clean, efficient code that gets the job done.
          </p>
          <p>
            When I'm not studying, I explore tools and frameworks that help me
            build better software. I keep things simple and functional.
          </p>
          <div className="flex items-center gap-5">
            <motion.div
              initial="initial"
              whileHover="hover"
              className="inline-block"
            >
              <Button className="rounded-sm cursor-pointer bg-blue-500 text-white hover:bg-blue-600 text-md">
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
        <div className="border rounded-2xl p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="rounded bg-blue-500 text-white w-fit px-1 py-1">
              <Terminal />
            </div>
            <h2 className="font-semibold">MY INTERESTS</h2>
          </div>
          <div className=" grid grid-cols-2 gap-4">
            {interests.map((interest) => {
              return (
                <div className="rounded-2xl border p-4 space-y-2">
                  <div className="bg-orange-500 rounded py-1 px-1 w-fit">
                    {interest.icon}
                  </div>
                  <h3 className="font-bold">{interest.title}</h3>
                  <p>{interest.description}</p>
                </div>
              );
            })}
          </div>
          <button className="bg-transparent cursor-pointer rounded-4xl hover:bg-[var(--button-transparent-hover)] inline-flex items-center px-4 py-2 border gap-2 transition text-sm">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
