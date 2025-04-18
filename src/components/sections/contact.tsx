import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

const contactInfo = [
  { name: "Email" },
  { name: "LinkedIn", style: "devicon-linkedin-plain colored" },
  { name: "Twitter / X", style: "devicon-twitter-original colored" },
];

export default function Contact() {
  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 5 },
  };
  return (
    <div className="min-h-[50vh] mt-10 space-y-5">
      <h3 className="text-2xl font-bold">
        Contact Me<span className="text-blue-200">.</span>
      </h3>
      <p>
        I'm always eager to explore new opportunities and take on exciting
        projects. If you have a project in mind, or just want to say hi, feel
        free to send me a message.
      </p>
      <div className="flex items-center gap-4">
        {contactInfo.map((info) => {
          return (
            <motion.div
              initial="initial"
              whileHover="hover"
              className="inline-block"
            >
              <Button
                variant="outline"
                className="rounded-sm cursor-pointer text-[var(--text)] hover:bg-[var(--button-transparent-hover)] text-lg bg-transparent"
              >
                {info.style && (
                  <i className={clsx("text-xl mr-3", info.style)}></i>
                )}
                {info.style == null && <p className="text-2xl mr-3">@</p>}

                {info.name}
                <motion.span
                  variants={arrowVariants}
                  transition={{ type: "tween" }}
                >
                  <ArrowRight />
                </motion.span>
              </Button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
