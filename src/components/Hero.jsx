import { ArrowUpRight } from "lucide-react";
import profileImage from "../assets/profile.JPG";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full justify-center overflow-hidden px-6 pt-32 md:px-10 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-150px] top-[180px] h-[350px] w-[350px] rounded-full bg-[#426b45]/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-100px] top-[100px] h-[300px] w-[300px] rounded-full bg-[#b7c98b]/10 blur-[120px]" />

      {/* Hero container */}
      <div className="relative mx-auto grid w-full max-w-6xl min-h-[80vh] items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
        {/* LEFT */}
        <div className="min-w-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b7c98b]/20 bg-white/[0.04] px-4 py-2 text-xs tracking-[0.2em] text-[#b7c98b] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b7c98b]" />
            FULL STACK DEVELOPER
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#f5f1e8] sm:text-6xl lg:text-7xl">
            Turning Ideas
            <br />
            Into <span className="text-[#b7c98b]">Real Products.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
            I'm Uttkarsh, a Full Stack Developer focused on building modern,
            responsive and user-friendly web applications. I enjoy turning
            ideas into products that people can actually use.
          </p>

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
        <div className="relative flex w-full justify-center lg:justify-end">
          <div className="liquid-glass relative h-[400px] w-full max-w-[420px] overflow-hidden rounded-[32px] p-0">
            {/* Profile image */}
            <img
              src={profileImage}
              alt="Uttkarsh Pal"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-[#07120c]/75" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs tracking-[0.2em] text-white/80 drop-shadow">
                  AVAILABLE
                </span>

                <span className="flex items-center gap-2 text-xs text-[#d8e7a8] drop-shadow">
                  <span className="h-2 w-2 rounded-full bg-[#b7c98b] shadow-[0_0_12px_#b7c98b]" />
                  Open to opportunities
                </span>
              </div>

              <div className="text-center">
                <p className="text-sm font-medium tracking-[0.15em] text-white/75 drop-shadow">
                  
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-white drop-shadow-lg">
                  
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-2xl border border-white/15 bg-black/30 p-3 text-center backdrop-blur-md">
                  <p className="text-lg font-semibold text-white">3+</p>
                  <p className="text-[10px] text-white/60">Projects</p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-black/30 p-3 text-center backdrop-blur-md">
                  <p className="text-lg font-semibold text-white">MERN</p>
                  <p className="text-[10px] text-white/60">Stack</p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-black/30 p-3 text-center backdrop-blur-md">
                  <p className="text-lg font-semibold text-white">∞</p>
                  <p className="text-[10px] text-white/60">Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-white/30 md:flex">
        <span>Scroll to explore</span>
        <div className="h-10 w-px bg-gradient-to-b from-[#b7c98b] to-transparent" />
      </div>
    </section>
  );
}

export default Hero;
