import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Journey", "journey"],
  ["Contact", "contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links.map(([, id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="site-nav fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 rounded-[24px] border border-white/10 bg-[#07130d]/80 px-3 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:w-[calc(100%-2rem)] sm:px-5">
      <div className="flex items-center justify-between">
        <a href="#home" onClick={closeMenu} className="group text-xl font-bold tracking-tight text-[#f5f1e8]">
          Uttkarsh<span className="text-[#b7c98b] transition group-hover:text-white">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-full px-3 py-2 text-sm transition ${
                active === id
                  ? "bg-white/[0.07] text-[#f5f1e8]"
                  : "text-white/50 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a href="https://github.com/Uttkarshpal0009" target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-button">
            <GithubIcon size={17} />
          </a>
          <a href="https://www.linkedin.com/in/uttkarsh-pal-web-developer/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-button">
            <LinkedinIcon size={17} />
          </a>
          <a href="#contact" className="ml-1 inline-flex items-center gap-2 rounded-full bg-[#f5f1e8] px-4 py-2 text-sm font-medium text-[#102018] transition hover:-translate-y-0.5 hover:bg-[#dfe8c8]">
            Let's Talk <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="icon-button md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="mt-3 border-t border-white/10 pt-3 md:hidden">
          <div className="grid gap-1">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
                className={`rounded-xl px-3 py-2.5 text-sm transition ${
                  active === id ? "bg-white/[0.06] text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="mt-2 flex gap-2 border-t border-white/10 pt-3">
            <a href="https://github.com/Uttkarshpal0009" target="_blank" rel="noreferrer" className="social-link flex-1"><GithubIcon size={16} /> GitHub</a>
            <a href="https://www.linkedin.com/in/uttkarsh-pal-web-developer/" target="_blank" rel="noreferrer" className="social-link flex-1"><LinkedinIcon size={16} /> LinkedIn</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
