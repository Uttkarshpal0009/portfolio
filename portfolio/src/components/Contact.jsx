import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b7c98b]/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#b7c98b]">
            Get In Touch
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#f5f1e8] md:text-5xl">
            Let's build something
            <span className="text-[#b7c98b]"> together.</span>
          </h2>

          <p className="mt-5 leading-7 text-white/50">
            Have an opportunity, project, or simply want to connect?
            Feel free to reach out.
          </p>
        </div>

        {/* Contact Card */}
        <div className="liquid-glass rounded-[32px] p-7 md:p-10">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.8fr]">

            {/* Left */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/30">
                Say Hello
              </p>

              <h3 className="mt-4 max-w-lg text-3xl font-medium leading-tight text-[#f5f1e8] md:text-4xl">
                Open to opportunities and interesting conversations.
              </h3>

              {/* Contact Details */}
              <div className="mt-9 space-y-5">

                {/* Email */}
                <a
                  href="mailto:uttkarshpal0009@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b7c98b]/10 text-[#b7c98b]">
                    <Mail size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-white/30">Email</p>
                    <p className="mt-1 text-sm text-white/65 transition group-hover:text-[#f5f1e8]">
                      uttkarshpal0009@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918182836832"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b7c98b]/10 text-[#b7c98b]">
                    <Phone size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-white/30">Phone</p>
                    <p className="mt-1 text-sm text-white/65 transition group-hover:text-[#f5f1e8]">
                      +91 8182836832
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b7c98b]/10 text-[#b7c98b]">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-white/30">Location</p>
                    <p className="mt-1 text-sm text-white/65">
                      Pune, Maharashtra
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-between">

              <div>
                <p className="text-sm leading-7 text-white/45">
                  I'm always interested in learning, building meaningful
                  products, and connecting with people working on exciting
                  ideas.
                </p>

               <a
  href="https://ig.me/m/mr.harshpal_"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full bg-[#f5f1e8] px-8 py-4 text-base font-semibold text-[#102018] transition hover:-translate-y-1 hover:bg-[#dfe8c8]"
>
  Start a conversation
  <ArrowUpRight size={20} />
</a>
              </div>

              {/* Availability */}
              <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#b7c98b] shadow-[0_0_12px_rgba(183,201,139,0.6)]" />

                  <span className="text-sm text-white/60">
                    Open to opportunities
                  </span>
                </div>

                <p className="mt-3 text-xs leading-6 text-white/35">
                  Available for frontend and full-stack development
                  opportunities.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;