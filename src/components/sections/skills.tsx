import clsx from "clsx";

const technologies = [
  // Web & Frontend
  { name: "React", style: "devicon-react-plain colored" },
  { name: "Next.js", style: "devicon-nextjs-plain colored" },
  { name: "TailwindCSS", style: "devicon-tailwindcss-plain colored" },
  { name: "Javascript", style: "devicon-javascript-plain colored" },
  { name: "Typescript", style: "devicon-typescript-plain colored" },
  { name: "Node.js", style: "devicon-nodejs-plain colored" },
  { name: "Express.js", style: "devicon-express-original" },
  { name: "NPM", style: "devicon-npm-original-wordmark colored" },
  { name: "PNPM", style: "devicon-pnpm-plain colored" },

  // Backend / APIs
  { name: "FastAPI", style: "devicon-fastapi-plain colored" },
  { name: "Flask", style: "devicon-flask-original colored" },
  { name: "Django", style: "devicon-django-plain colored" },
  { name: "Gin", style: "" },

  // Languages
  { name: "Python", style: "devicon-python-plain colored" },
  { name: "Golang", style: "devicon-go-plain colored" },
  { name: "Dart", style: "devicon-dart-plain colored" },
  { name: "C", style: "devicon-c-plain colored" },
  { name: "SQL", style: "devicon-mysql-original colored" },

  // Mobile / Cross-platform
  { name: "Flutter", style: "devicon-flutter-plain colored" },

  // Databases
  { name: "PostgreSQL", style: "devicon-postgresql-plain colored" },
  { name: "MySQL", style: "devicon-mysql-plain colored" },
  { name: "MongoDB", style: "devicon-mongodb-plain colored" },
  { name: "SQLite", style: "devicon-sqlite-plain colored" },
  { name: "Supabase", style: "devicon-supabase-plain colored" },
  { name: "Pinecone", style: "" },

  // Tools / DevOps
  { name: "Git", style: "devicon-git-plain colored" },
  { name: "Github", style: "devicon-github-original" },
  { name: "Docker", style: "devicon-docker-plain colored" },
  { name: "Vercel", style: "devicon-vercel-original" },
  { name: "Figma", style: "devicon-figma-plain colored" },
  { name: "ESLint", style: "devicon-eslint-original colored" },

  // Machine Learning / Data
  { name: "TensorFlow", style: "devicon-tensorflow-original colored" },
  { name: "Pandas", style: "devicon-pandas-plain colored" },
  { name: "Numpy", style: "devicon-numpy-plain colored" },
  { name: "Matlab", style: "devicon-matlab-plain colored" },
];

export default function Skills() {
  return (
    <div className="min-h-[50vh] mt-10 space-y-5">
      <h3 className="text-2xl font-bold">
        Technologies I use<span className="text-blue-200">.</span>
      </h3>
      <p>
        Over the years, I have worked with a variety of technologies. Here are
        some of the technologies I have experience with:
      </p>
      <div className="flex items-center flex-wrap gap-3">
        {technologies.map((technology) => {
          return (
            <button className="bg-transparent cursor-pointer rounded-sm hover:bg-[var(--button-transparent-hover)] inline-flex items-center px-3 py-1 border gap-2 transition">
              <i className={clsx("text-xl", technology.style)}></i>
              {technology.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
