import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "UploDrive",
    type: "Full Stack",
    description:
      "A secure cloud storage platform with JWT authentication, file uploads, downloads, and protected file management.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "Context API",
      "Axios",
    ],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    number: "02",
    title: "Notes Keeper",
    type: "React Application",
    description:
      "A responsive CRUD notes application with instant UI updates, editing, deleting, and dynamic date handling.",
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Uttkarshpal0009/notes-app",
    live: "https://notes-app-kyko.vercel.app/",
    featured: false,
  },
  {
    number: "03",
    title: "Portfolio Website",
    type: "Personal Portfolio",
    description:
      "A responsive developer portfolio showcasing projects, technical skills, and professional experience.",
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "#",
    live: "#",
    featured: false,
  },
];

function ProjectCard({ project }) {
  return (
    <article
      className={`group liquid-glass liquid-glass-hover rounded-[28px] p-6 ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="relative z-10">

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-[#b7c98b]">
            {project.number}
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/40">
            {project.type}
          </span>
        </div>

        {/* Project Preview */}
        <div
          className={`relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0a1811] ${
            project.featured ? "h-64" : "h-52"
          }`}
        >
          <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b7c98b]/10 blur-3xl" />

          <div className="absolute inset-6 rounded-xl border border-white/[0.06]" />

          <div className="absolute left-10 top-10 h-2 w-20 rounded-full bg-white/10" />

          <div className="absolute left-10 top-[4.5rem] h-2 w-32 rounded-full bg-white/[0.06]" />

          <div className="absolute bottom-10 left-10 right-10 flex gap-3">
            <div className="h-16 flex-1 rounded-xl border border-white/[0.06] bg-white/[0.025]" />
            <div className="h-16 w-1/3 rounded-xl border border-white/[0.06] bg-[#b7c98b]/5" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                Project
              </p>

              <h3 className="mt-2 text-3xl font-semibold text-[#f5f1e8]">
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-6">
          <h3 className="text-2xl font-medium text-[#f5f1e8]">
            {project.title}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
            {project.description}
          </p>

          {/* Tech */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#b7c98b]/10 bg-[#b7c98b]/[0.07] px-3 py-1.5 text-xs text-[#b7c98b]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-7 flex items-center gap-5">

            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 transition hover:text-[#f5f1e8]"
              >
                <span>↗</span>
                GitHub
              </a>
            )}

            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-[#b7c98b] transition hover:gap-3"
              >
                Live Demo
                <ArrowUpRight size={17} />
              </a>
            )}

            {project.featured && (
              <span className="ml-auto hidden items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/25 sm:flex">
                Featured
                <ExternalLink size={14} />
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function Project() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#b7c98b]">
            Selected Work
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#f5f1e8] md:text-5xl">
            Things I've{" "}
            <span className="text-[#b7c98b]">built.</span>
          </h2>

          <p className="mt-5 leading-7 text-white/50">
            Real projects built while learning, experimenting, and solving
            practical problems across the stack.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Project;