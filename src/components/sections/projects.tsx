import clsx from "clsx";
import { Link, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "UBMA CS-Hub",
    description:
      "Created a web platform that helps computer science students access study materials organized by year, semester, and module, with an admin dashboard for streamlined content management.",
    image: "images/ubma.png",
    technologies: [
      { name: "React", style: "devicon-react-plain colored" },
      { name: "Typescript", style: "devicon-typescript-plain colored" },
      { name: "Next.js", style: "devicon-nextjs-plain colored" },
      { name: "TailwindCSS", style: "devicon-tailwindcss-plain colored" },
    ],
    link: "https://github.com/anismabaziz/ubma-cshub",
  },
  {
    id: 2,
    title: "Grades Analysis Tool",
    description:
      "Built a platform that parses student grade PDFs and analyzes performance trends using AI. Automated data extraction and interpretation to help educators make informed decisions.",
    image: "images/students-analysis.png",
    technologies: [
      { name: "React", style: "devicon-react-plain colored" },
      { name: "TypeScript", style: "devicon-typescript-plain colored" },
      { name: "Python", style: "devicon-python-plain colored" },
      { name: "Shadcn/ui", style: "" },
      { name: "Flask", style: "devicon-flask-plain colored" },
      { name: "Supabase", style: "devicon-supabase-plain colored" },
      { name: "Vercel", style: "devicon-vercel-plain colored" },
      { name: "Render", style: "" },
      { name: "SQLAlchemy", style: "devicon-sqlalchemy-plain colored" },
    ],
    link: "https://github.com/anismabaziz/student-marks-analysis",
  },
  {
    id: 3,
    title: "PaperMind",
    description:
      "Created a web app that lets users upload PDFs and query their content through AI-powered interactions. Enhanced accuracy with a retrieval-augmented system for better context understanding.",
    image: "images/paper-mind.png",
    technologies: [
      { name: "React", style: "devicon-react-plain colored" },
      { name: "TypeScript", style: "devicon-typescript-plain colored" },
      { name: "Python", style: "devicon-python-plain colored" },
      { name: "Shadcn/ui" },
      { name: "Flask", style: "devicon-flask-plain colored" },
      { name: "Supabase", style: "devicon-supabase-plain colored" },
      { name: "Vercel", style: "devicon-vercel-plain colored" },
      { name: "Render" },
      { name: "Pinecone" },
      { name: "Gemini" },
    ],
    link: "https://github.com/anismabaziz/paper-mind",
  },
];
export default function Projects() {
  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 5 },
  };

  return (
    <div className="min-h-[50vh] mt-10 space-y-5" id="projects">
      <h3 className="text-2xl font-bold">
        My projects<span className="text-blue-200">.</span>
      </h3>
      <p>
        Explore some of my recent projects below. For more, visit my GitHub
        profile.
      </p>
      <div className="space-y-10">
        {projects.map((project) => {
          return (
            <div key={project.id} className="space-y-3">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p>{project.description}</p>
              <div className=" rounded-md w-full relative border">
                <img
                  src={project.image}
                  className="object-cover h-full w-full rounded-md"
                />
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                {project.technologies.map((tech, idx) => {
                  return (
                    <button
                      className="bg-transparent cursor-pointer rounded-sm hover:bg-[var(--button-transparent-hover)] inline-flex items-center px-3 py-1 border gap-2 transition"
                      key={idx}
                    >
                      <i className={clsx("text-xl", tech.style)}></i>
                      {tech.name}
                    </button>
                  );
                })}
              </div>
              <motion.div
                initial="initial"
                whileHover="hover"
                className="inline-block"
              >
                <a href={project.link}>
                  <Button className="rounded-sm cursor-pointer bg-blue-500 text-white hover:bg-blue-600 text-md">
                    <Link />
                    Github Link
                    <motion.span
                      variants={arrowVariants}
                      transition={{ type: "tween" }}
                    >
                      <ArrowRight />
                    </motion.span>
                  </Button>
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
