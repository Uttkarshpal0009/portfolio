import { Briefcase, GraduationCap } from "lucide-react";

function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#b7c98b]">
            My Journey
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#f5f1e8] md:text-5xl">
            Learning, building &
            <span className="text-[#b7c98b]"> growing.</span>
          </h2>

          <p className="mt-5 leading-7 text-white/50">
            A quick look at my professional experience and academic journey.
          </p>
        </div>

        {/* Journey Grid */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Experience */}
          <div className="liquid-glass liquid-glass-hover rounded-[28px] p-7 md:p-8">
            <div className="relative z-10">

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b7c98b]/10 text-[#b7c98b]">
                  <Briefcase size={22} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Experience
                  </p>

                  <h3 className="mt-1 text-xl font-medium text-[#f5f1e8]">
                    Professional Experience
                  </h3>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-8 border-l border-white/10 pl-6">

                <div className="relative">
                  <span className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full bg-[#b7c98b]" />

                  <p className="text-xs uppercase tracking-[0.18em] text-[#b7c98b]">
                    Jul 2025
                  </p>

                  <h4 className="mt-2 text-lg font-medium text-[#f5f1e8]">
                    Frontend Web Developer Intern
                  </h4>

                  <p className="mt-1 text-sm text-white/40">
                    YuvaIntern · Remote
                  </p>

                  <ul className="mt-5 space-y-3 text-sm leading-6 text-white/50">
                    <li>
                      • Developed 8+ reusable React components used across 5+
                      pages.
                    </li>

                    <li>
                      • Converted static HTML/CSS designs into functional
                      React components.
                    </li>

                    <li>
                      • Followed a mobile-first responsive development
                      approach.
                    </li>

                    <li>
                      • Participated in code reviews and sprint planning with a
                      team of 5.
                    </li>

                    <li>
                      • Used Git for version control and collaborative
                      development.
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          {/* Education */}
          <div className="liquid-glass liquid-glass-hover rounded-[28px] p-7 md:p-8">
            <div className="relative z-10">

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b7c98b]/10 text-[#b7c98b]">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Education
                  </p>

                  <h3 className="mt-1 text-xl font-medium text-[#f5f1e8]">
                    Academic Background
                  </h3>
                </div>
              </div>

              {/* Education Timeline */}
              <div className="mt-8 border-l border-white/10 pl-6">

                <div className="relative">
                  <span className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full bg-[#b7c98b]" />

                  <p className="text-xs uppercase tracking-[0.18em] text-[#b7c98b]">
                    Completed · July 2026
                  </p>

                  <h4 className="mt-2 text-lg font-medium text-[#f5f1e8]">
                    Bachelor of Technology
                  </h4>

                  <p className="mt-1 text-sm text-white/40">
                    Computer Science & Engineering (AI & ML)
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/50">
                    Dr. A.P.J. Abdul Kalam Technical University
                  </p>

                  <div className="mt-6 inline-flex items-center rounded-full border border-[#b7c98b]/15 bg-[#b7c98b]/10 px-4 py-2">
                    <span className="text-sm text-[#b7c98b]">
                      CGPA · 7.5 / 10
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Journey;