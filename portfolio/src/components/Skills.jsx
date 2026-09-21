import { Code2, Database, GitBranch, Layout, Server, Wrench } from "lucide-react";

const skills = [
  { title: "Frontend", icon: <Layout size={22} />, skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
  { title: "Backend", icon: <Server size={22} />, skills: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Database", icon: <Database size={22} />, skills: ["MongoDB", "Mongoose","MySQL", "MongoDB Atlas"] },
  { title: "Programming", icon: <Code2 size={22} />, skills: ["JavaScript","Python", "Java", "DSA"] },
  { title: "Tools", icon: <Wrench size={22} />, skills: ["Git", "GitHub", "Postman", "VS Code"] },
  { title: "Workflow", icon: <GitBranch size={22} />, skills: ["Git", "Vite", "npm", "Vercel"] },
];

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16">
      <div className="pointer-events-none absolute right-[-150px] top-1/4 h-80 w-80 rounded-full bg-[#b7c98b]/10 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="section-kicker">Skills & Tools</p>
          <h2 className="section-title">Tools I use to <span>build.</span></h2>
          <p className="section-copy">Technologies and tools I use while building web applications, experimenting with ideas, and solving problems.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((item, index) => (
            <div key={item.title} className="liquid-glass liquid-glass-hover rounded-[26px] p-6">
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b7c98b]/10 text-[#b7c98b]">{item.icon}</div>
                  <span className="text-xs text-white/25">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-[#f5f1e8]">{item.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">{item.skills.map((skill) => <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/55">{skill}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
