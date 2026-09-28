import { ArrowUpRight } from "lucide-react";

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

            {/* GitHub */}
            <a
              href="https://github.com/Uttkarshpal0009"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition hover:border-[#b7c98b]/30 hover:text-[#b7c98b]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/uttkarsh-pal-web-developer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition hover:border-[#b7c98b]/30 hover:text-[#b7c98b]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.56 20.452h3.554V9H3.56v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
              </svg>
            </a>

            {/* Back to Top */}
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

          <p>Designed & built with React.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;