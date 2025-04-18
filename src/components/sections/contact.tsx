import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

const contactInfo = [
  { name: "Email", link: "mailto:anismabaziz@gmail.com" },
  {
    name: "LinkedIn",
    style: "devicon-linkedin-plain colored",
    link: "https://www.linkedin.com/in/anismabaziz/",
  },
  {
    name: "Twitter / X",
    style: "devicon-twitter-original colored",
    link: "https://x.com/anismabaziz",
  },
];

export default function Contact() {
  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 5 },
  };
  return (
    <div className="min-h-[20vh] my-10 space-y-5" id="contact">
      <h3 className="text-2xl font-bold">
        Contact Me<span className="text-blue-200">.</span>
      </h3>
      <p>
        I'm always eager to explore new opportunities and take on exciting
        projects. If you have a project in mind, or just want to say hi, feel
        free to send me a message.
      </p>
      <div className="flex items-center gap-4 flex-wrap">
        {contactInfo.map((info, idx) => {
          return (
            <motion.div
              initial="initial"
              whileHover="hover"
              className="inline-block"
              key={idx}
            >
              <a href={info.link}>
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
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
