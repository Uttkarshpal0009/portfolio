import { ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-150px] top-[180px] h-[350px] w-[350px] rounded-full bg-[#426b45]/20 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-100px] top-[100px] h-[300px] w-[300px] rounded-full bg-[#b7c98b]/10 blur-[120px]" />

      {/* Main Hero */}
      <div
        className="
          relative mx-auto grid min-h-[80vh] max-w-6xl
          items-center gap-12
          lg:-translate-y-10
          lg:grid-cols-[1.15fr_0.85fr]
        "
      >
        {/* LEFT */}
        <div>
          {/* Small label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b7c98b]/20 bg-white/[0.04] px-4 py-2 text-xs tracking-[0.2em] text-[#b7c98b] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b7c98b]" />
            FULL STACK DEVELOPER
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#f5f1e8] sm:text-6xl lg:text-7xl">
            Turning Ideas
            <br />
            Into{" "}
            <span className="text-[#b7c98b]">
              Real Products.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
            I'm Uttkarsh, a Full Stack Developer focused on building
            modern, responsive and user-friendly web applications.
            I enjoy turning ideas into products that people can actually use.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-[#f5f1e8] px-6 py-3 font-medium text-[#102018] transition duration-300 hover:scale-[1.03] hover:bg-[#dfe8c8]"
            >
              View My Work

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="liquid-glass liquid-glass-hover flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          {/* Profile Card */}
          <div className="liquid-glass relative h-[500px] w-full max-w-[520px] overflow-hidden rounded-[32px]">
            
            {/* Profile Image */}
            <img
              src="profile.JPG"
              alt="Uttkarsh Pal"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Top information */}
            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              
              <div className="flex justify-between">
                <span className="text-xs tracking-[0.2em] text-white/70">
                  AVAILABLE
                </span>

                <span className="flex items-center gap-2 text-xs text-[#d5e5a5]">
                  <span className="h-2 w-2 rounded-full bg-[#b7c98b]" />
                  Open to opportunities
                </span>
              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-3 text-center backdrop-blur-md">
                  <p className="text-lg font-semibold text-white">
                    3+
                  </p>

                  <p className="text-[10px] text-white/60">
                    Projects
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-3 text-center backdrop-blur-md">
                  <p className="text-lg font-semibold text-white">
                    MERN
                  </p>

                  <p className="text-[10px] text-white/60">
                    Stack
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-3 text-center backdrop-blur-md">
                  <p className="text-lg font-semibold text-white">
                    ∞
                  </p>

                  <p className="text-[10px] text-white/60">
                    Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-white/30 md:flex">
        <span>Scroll to explore</span>

        <div className="h-10 w-px bg-gradient-to-b from-[#b7c98b] to-transparent" />
      </div>
    </section>
  );
}

export default Hero;