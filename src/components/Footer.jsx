import { ArrowUpRight,} from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-semibold tracking-tight text-[#f5f1e8]"
            >
              Uttkarsh<span className="text-[#b7c98b]">.</span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
              Full Stack Developer building clean, responsive and practical
              web experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Uttkarshpal0009"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition hover:border-[#b7c98b]/30 hover:text-[#b7c98b]"
            >
              
            </a>

            <a
              href="https://www.linkedin.com/in/uttkarsh-pal-web-developer/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition hover:border-[#b7c98b]/30 hover:text-[#b7c98b]"
            >
            
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition hover:border-[#b7c98b]/30 hover:text-[#b7c98b]"
            >
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/[0.07] pt-6 text-xs text-white/30 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Uttkarsh Pal. All rights reserved.
          </p>

          <p>
            Designed & built with React.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;