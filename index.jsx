import { useState } from 'react';

export function HKBrandingAdminPanel() {
  const [projects] = useState([
    {
      name: 'Noir Studio',
      status: 'Active',
      client: 'Luxury Fashion',
    },
    {
      name: 'Veluxe',
      status: 'Pending',
      client: 'Cosmetics Brand',
    },
    {
      name: 'Aether',
      status: 'Completed',
      client: 'Tech Startup',
    },
  ]);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Sidebar */}
      <aside className="w-[280px] border-r border-white/10 bg-black/40 backdrop-blur-3xl p-8 hidden lg:flex flex-col justify-between">
        <div>
          <h1 className="text-xl uppercase tracking-[0.35em] font-semibold text-white/90 mb-16">
            HK Admin
          </h1>

          <nav className="space-y-4">
            {['Dashboard', 'Projects', 'Clients', 'Analytics', 'Messages', 'Settings'].map((item, index) => (
              <button
                key={index}
                className={`w-full text-left px-5 py-4 rounded-2xl transition duration-300 ${
                  index === 0
                    ? 'bg-white text-black'
                    : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="border border-white/10 bg-white/[0.03] rounded-3xl p-6">
          <p className="text-sm text-white/40 mb-2">Active Projects</p>
          <h3 className="text-5xl font-semibold">12</h3>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-hidden">
        {/* Topbar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-3">
              Dashboard
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.05em] text-white/90">
              Welcome Back.
            </h2>
          </div>

          <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition duration-300">
            New Project
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { label: 'Revenue', value: '$24K' },
            { label: 'Clients', value: '48' },
            { label: 'Projects', value: '120+' },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-8"
            >
              <p className="text-white/40 text-sm mb-4 uppercase tracking-[0.25em]">
                {item.label}
              </p>

              <h3 className="text-5xl font-semibold tracking-[-0.05em] text-white/90">
                {item.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Project Table */}
        <div className="rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl overflow-hidden">
          <div className="p-8 border-b border-white/10 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-2">
                Projects
              </p>

              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white/90">
                Current Work
              </h3>
            </div>

            <button className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/[0.06] transition duration-300">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-white/40 text-sm uppercase tracking-[0.2em]">
                  <th className="p-6 font-medium">Project</th>
                  <th className="p-6 font-medium">Client</th>
                  <th className="p-6 font-medium">Status</th>
                  <th className="p-6 font-medium">Action</th>
                </tr>
              </thead>

              <tbody>
                {projects.map((project, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-white/[0.03] transition duration-300"
                  >
                    <td className="p-6 text-white/90 font-medium">
                      {project.name}
                    </td>

                    <td className="p-6 text-white/50">
                      {project.client}
                    </td>

                    <td className="p-6">
                      <span className="px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-sm text-white/70">
                        {project.status}
                      </span>
                    </td>

                    <td className="p-6">
                      <button className="text-white/60 hover:text-white transition">
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function HKBrandingAgency() {
  const services = [
    {
      title: 'Brand Identity',
      desc: 'Timeless visual systems crafted with precision, clarity, and luxury aesthetics.',
    },
    {
      title: 'UI / UX Design',
      desc: 'Minimal digital experiences designed for modern startups and premium brands.',
    },
    {
      title: 'Packaging Design',
      desc: 'Elegant packaging concepts that elevate product perception instantly.',
    },
    {
      title: 'Creative Direction',
      desc: 'Strategic visual storytelling with refined art direction and modern taste.',
    },
  ];

  const portfolio = [
    'Noir Studio',
    'Veluxe',
    'Aether',
    'Nova House',
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans relative">
      {/* Ambient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-2xl bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-lg md:text-xl uppercase tracking-[0.35em] font-semibold text-white/90">
            HK Branding
          </h1>

          <nav className="hidden md:flex items-center gap-10 text-sm text-white/50">
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#portfolio" className="hover:text-white transition">
              Portfolio
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          <button className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/80 hover:bg-white/[0.08] transition duration-300">
            Let’s Talk
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-32 grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.3em] text-white/40 mb-8">
            Luxury Branding Studio
          </div>

          <h2 className="text-6xl md:text-8xl font-semibold tracking-[-0.07em] leading-[0.9] text-white/95">
            Minimal.
            <br />
            Elegant.
            <br />
            Timeless.
          </h2>

          <p className="mt-8 text-lg text-white/45 max-w-xl leading-relaxed font-light">
            We design refined identities and digital experiences for brands that value simplicity, precision, and modern luxury.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition duration-300">
              Start Project
            </button>

            <button className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/[0.06] transition duration-300">
              Explore Work
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[50px] bg-white/[0.02] blur-3xl" />

          <div className="relative rounded-[50px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-6 overflow-hidden">
            <div className="grid grid-cols-2 gap-4">
              {portfolio.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-[32px] border border-white/10 bg-zinc-900/80 h-[220px] flex items-end p-6 ${index % 2 === 1 ? 'mt-10' : '-mt-0'}`}
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/30 mb-2">
                      Branding
                    </p>
                    <h4 className="text-2xl font-medium text-white/90">
                      {item}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-28 border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-5">
              Services
            </p>

            <h3 className="text-5xl md:text-6xl font-semibold tracking-[-0.05em] leading-tight text-white/90">
              Crafted for modern
              <br />
              luxury brands.
            </h3>
          </div>

          <div className="space-y-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="pb-10 border-b border-white/10 flex items-start justify-between gap-6"
              >
                <div>
                  <h4 className="text-2xl font-medium text-white/90 mb-3 tracking-[-0.03em]">
                    {service.title}
                  </h4>

                  <p className="text-white/45 leading-relaxed max-w-lg">
                    {service.desc}
                  </p>
                </div>

                <span className="text-white/20 text-xl font-light">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="max-w-7xl mx-auto px-6 py-28 border-t border-white/5"
      >
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-5">
              Portfolio
            </p>

            <h3 className="text-5xl md:text-6xl font-semibold tracking-[-0.05em] text-white/90">
              Selected Work.
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="group rounded-[40px] border border-white/10 bg-white/[0.03] min-h-[420px] p-10 flex items-end hover:bg-white/[0.05] transition duration-500"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/30 mb-4">
                  Visual Identity
                </p>

                <h4 className="text-4xl font-medium tracking-[-0.04em] text-white/90">
                  {item}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-28 border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-5">
              About
            </p>

            <h3 className="text-5xl md:text-6xl font-semibold tracking-[-0.05em] leading-tight text-white/90">
              Quiet design.
              <br />
              Powerful presence.
            </h3>
          </div>

          <div>
            <p className="text-lg text-white/45 leading-relaxed">
              HK Branding creates minimal visual systems with timeless elegance. Every layout, typography decision, and interaction is crafted to feel intentional and premium.
            </p>

            <div className="grid grid-cols-2 gap-10 mt-14">
              <div>
                <h4 className="text-5xl font-semibold text-white/90">120+</h4>
                <p className="text-white/40 mt-2">Projects</p>
              </div>

              <div>
                <h4 className="text-5xl font-semibold text-white/90">48</h4>
                <p className="text-white/40 mt-2">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">
            Contact
          </p>

          <h3 className="text-5xl md:text-7xl font-semibold tracking-[-0.06em] leading-[0.95] text-white/90">
            Let’s build something
            <br />
            unforgettable.
          </h3>

          <p className="mt-8 text-white/45 text-lg leading-relaxed max-w-2xl mx-auto">
            Elegant design can completely transform the perception of your business.
          </p>

          <button className="mt-12 px-10 py-4 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition duration-300">
            hello@hkbranding.com
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl uppercase tracking-[0.3em] font-semibold text-white/90 mb-4">
              HK Branding
            </h3>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Premium branding and minimalist digital experiences for ambitious businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.25em] text-white/70 mb-5">
              Navigation
            </h4>

            <div className="space-y-3 text-sm text-white/40">
              <a href="#services" className="block hover:text-white transition">
                Services
              </a>
              <a href="#portfolio" className="block hover:text-white transition">
                Portfolio
              </a>
              <a href="#about" className="block hover:text-white transition">
                About
              </a>
              <a href="#contact" className="block hover:text-white transition">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.25em] text-white/70 mb-5">
              Socials
            </h4>

            <div className="space-y-3 text-sm text-white/40">
              <a href="#" className="block hover:text-white transition">
                Instagram
              </a>
              <a href="#" className="block hover:text-white transition">
                Behance
              </a>
              <a href="#" className="block hover:text-white transition">
                Dribbble
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.25em] text-white/70 mb-5">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-white/40">
              <p>hello@hkbranding.com</p>
              <p>Ahmedabad, India</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>© 2026 HK Branding. All rights reserved.</p>

          <p>Designed with precision ✦</p>
        </div>
      </footer>
    </div>
  );
}
