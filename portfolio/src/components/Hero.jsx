import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import profileImage from "../assets/uttkarsh-profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden px-5 pb-16 pt-32 sm:px-6 md:px-10 md:pt-40 lg:px-16">
      <div className="pointer-events-none absolute -left-40 top-24 h-[430px] w-[430px] rounded-full bg-[#426b45]/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 top-16 h-[390px] w-[390px] rounded-full bg-[#b7c98b]/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/[0.02] blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="hero-copy">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b7c98b]/20 bg-white/[0.04] px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-[#b7c98b] backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#b7c98b] shadow-[0_0_12px_rgba(183,201,139,.8)]" />
            FULL STACK DEVELOPER · OPEN TO WORK
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#f5f1e8] sm:text-6xl lg:text-[5.25rem]">
            Building digital experiences that <span className="text-[#b7c98b]">feel simple.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            I'm Uttkarsh, a Full Stack Developer focused on building modern,
            responsive and practical web applications with React, Node.js,
            Express and MongoDB.
          </p>

         <div className="mt-9 flex flex-wrap gap-3">
  <a
    href="#projects"
    className="group inline-flex items-center gap-2 rounded-full bg-[#f5f1e8] px-6 py-3.5 text-sm font-medium text-[#102018] transition hover:-translate-y-0.5 hover:bg-[#dfe8c8]"
  >
    View My Work
    <ArrowUpRight
      size={18}
      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </a>

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=uttkarshpal0009@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-[#f5f1e8] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[#b7c98b]/30 hover:bg-[#b7c98b]/10"
  >
    Let's Connect
    <Mail
      size={17}
      className="transition-transform group-hover:translate-x-1"
    />
  </a>
</div>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <span className="mr-1 text-xs uppercase tracking-[0.18em] text-white/30">Find me</span>
            <a href="https://github.com/Uttkarshpal0009" target="_blank" rel="noreferrer" aria-label="Open Uttkarsh's GitHub" className="social-icon"><GithubIcon size={18} /></a>
            <a href="https://www.linkedin.com/in/uttkarsh-pal-web-developer/" target="_blank" rel="noreferrer" aria-label="Open Uttkarsh's LinkedIn" className="social-icon"><LinkedinIcon size={18} /></a>
            <span className="hidden text-xs text-white/25 sm:inline">github.com/Uttkarshpal0009</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[430px] lg:justify-self-end">
          <div className="absolute -inset-6 rounded-[42px] bg-[#b7c98b]/10 blur-3xl" />
          <div className="liquid-glass relative rounded-[34px] p-3">
            <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0c1b13]">
              <img
                src={profileImage}
                alt="Portrait of Uttkarsh Pal"
                className="h-[430px] w-full object-cover object-[50%_27%] sm:h-[520px]"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07130d] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-[#07130d]/70 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-[#f5f1e8]">Uttkarsh Pal</p>
                    <p className="mt-1 text-xs text-white/45">React · Node.js · MongoDB</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#b7c98b]/20 bg-[#b7c98b]/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-[#b7c98b]">Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="stat-card"><strong>3+</strong><span>Projects</span></div>
            <div className="stat-card"><strong>MERN</strong><span>Stack</span></div>
            <div className="stat-card"><strong>∞</strong><span>Learning</span></div>
          </div>
        </div>
      </div>

      <a href="#about" className="mx-auto mt-10 hidden w-fit items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/30 transition hover:text-[#b7c98b] md:flex">
        Scroll to explore <ArrowDown size={14} />
      </a>
    </section>
  );
}

export default Hero;
