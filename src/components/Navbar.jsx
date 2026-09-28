import { Download } from "lucide-react";

function Navbar() {
  return (
    <nav className="liquid-glass liquid-glass-hover fixed top-4 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-[22px] px-6 py-4">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight"
        >
          Uttkarsh<span className="text-[#b7c98b]">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a href="#home" className="text-sm text-white/70 hover:text-white">
            Home
          </a>

          <a href="#about" className="text-sm text-white/70 hover:text-white">
            About
          </a>

          <a href="#skills" className="text-sm text-white/70 hover:text-white">
            Skills
          </a>

          <a href="#projects" className="text-sm text-white/70 hover:text-white">
            Projects
          </a>

          <a href="#journey" className="text-sm text-white/70 hover:text-white">
            Journey
          </a>

          <a href="#contact" className="text-sm text-white/70 hover:text-white">
            Contact
          </a>

        </div>

        {/* Resume */}
        <a
          href="/uttkarsh_resume.pdf"
          download
          className="flex items-center gap-2 rounded-full bg-[#f5f1e8] px-5 py-2.5 text-sm font-medium text-[#102018] transition hover:bg-[#dfe8c8]"
        >
          Resume
          <Download size={16} />
        </a>

      </div>

    </nav>
  );
}

export default Navbar;