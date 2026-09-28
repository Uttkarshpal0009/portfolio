import { ArrowUpRight, Code2, Layers3, Rocket } from "lucide-react";
function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-120px] top-1/3 h-72 w-72 rounded-full bg-[#6f8f55]/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#b7c98b]">
            About Me
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#f5f1e8] md:text-5xl">
            I build things that are
            <span className="text-[#b7c98b]"> useful.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-white/55">
            I'm a Full Stack Developer who enjoys turning ideas into clean,
            responsive and functional web experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          
          {/* About Card */}
          <div className="liquid-glass liquid-glass-hover rounded-[28px] p-7 md:p-9">
            <div className="relative z-10">
              <div className="mb-7 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b7c98b]/10 text-[#b7c98b]">
                  <Code2 size={23} />
                </span>

                <span className="text-xs uppercase tracking-[0.2em] text-white/35">
                  Developer
                </span>
              </div>

              <h3 className="text-2xl font-medium text-[#f5f1e8]">
                From idea to interface.
              </h3>

              <p className="mt-5 leading-8 text-white/55">
                I work across the frontend and backend to create web
                applications that are simple to use and reliable underneath.
                My focus is on writing clean code, understanding how things
                work, and continuously improving my development skills.
              </p>

              <p className="mt-4 leading-8 text-white/55">
                I enjoy working with modern JavaScript technologies,
                experimenting with new ideas, and building projects that solve
                real problems.
              </p>

              <a
                href="#projects"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#b7c98b] transition hover:gap-3"
              >
                Explore my work
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            
            <div className="liquid-glass liquid-glass-hover rounded-[28px] p-7">
              <div className="relative z-10">
                <Layers3 className="text-[#b7c98b]" size={25} />

                <h3 className="mt-6 text-xl font-medium text-[#f5f1e8]">
                  Full Stack Mindset
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  Comfortable working with both user interfaces and backend
                  systems.
                </p>
              </div>
            </div>

            <div className="liquid-glass liquid-glass-hover rounded-[28px] p-7">
              <div className="relative z-10">
                <Rocket className="text-[#b7c98b]" size={25} />

                <h3 className="mt-6 text-xl font-medium text-[#f5f1e8]">
                  Always Learning
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  Learning new technologies by building, breaking and
                  rebuilding real projects.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;