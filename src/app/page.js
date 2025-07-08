import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* <ParticlesBackground /> */}

      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-purple-900/20 backdrop-blur-xs" />

      <main className="relative z-10 px-6 py-16 md:py-24 space-y-20 md:space-y-32">
        <section className="text-center pt-10 md:pt-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-indigo-900/30 rounded-full border border-indigo-700/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-sm font-medium text-indigo-300">
              Innovating the future
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Innovise
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering your digital transformation with intelligent{" "}
            <span className="font-semibold text-indigo-300">ServiceNow</span>{" "}
            solutions
          </p>

          <div className="mt-12 flex justify-center gap-4">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold px-16 py-3 rounded-full transition-all hover:scale-105 duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full font-medium border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-lg">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="text-indigo-300">Transforming</span>{" "}
                  businesses through innovation
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Innovise specializes in enterprise-grade ServiceNow solutions
                  that streamline workflows, boost productivity, and drive
                  digital transformation. Our expert team delivers customized
                  implementations that align with your unique business needs.
                </p>
                <div className="pt-2">
                  <button className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200 font-medium transition-colors">
                    Our methodology
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-xl border border-white/10 flex items-center justify-center">
                  <span className="text-white/40">Visual placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-indigo-300">Expertise</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive ServiceNow solutions tailored to your business
              requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "ServiceNow Consulting",
                desc: "Strategic guidance and customized solutions to maximize your ServiceNow investment.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                title: "ITSM Implementation",
                desc: "End-to-end implementation to streamline IT operations and service management.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                ),
              },
              {
                title: "Automation & Workflows",
                desc: "Intelligent automation to reduce manual tasks and improve efficiency.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 14a6 6 0 0 1 6-6" />
                    <path d="M14 6a6 6 0 0 1 6 6" />
                    <path d="M4 20h16" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="group bg-gradient-to-b from-white/5 to-transparent p-6 rounded-xl border border-white/10 hover:border-indigo-400/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:bg-indigo-500/20 transition-colors mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                <div className="mt-6">
                  <button className="text-sm text-indigo-300 hover:text-indigo-200 font-medium transition-colors flex items-center gap-1">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-8 md:p-12 rounded-3xl border border-indigo-700/30 backdrop-blur-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-indigo-300">transform</span> your
              business?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Schedule a consultation with our experts and discover how Innovise
              can elevate your ServiceNow experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all hover:scale-105 duration-300 shadow-lg shadow-indigo-500/20">
                Contact Sales
              </button>
              <button className="px-8 py-3 rounded-full font-medium border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300">
                Request Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-0">
            Innovise
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Innovise. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
