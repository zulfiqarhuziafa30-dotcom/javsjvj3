import { motion } from 'motion/react';
import { CTASection } from '../components/ui/CTASection';
import { Button } from '../components/ui/Button';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function Careers() {
  useDocumentTitle('Careers');
  const benefits = [
    {
      title: "Real client projects",
      desc: "Work on meaningful projects that have a direct impact on modern businesses."
    },
    {
      title: "Technology and creative work",
      desc: "Be part of a team that values both engineering excellence and exceptional design."
    },
    {
      title: "Learning and development",
      desc: "Continuous opportunities to expand your skill set and stay ahead of industry trends."
    },
    {
      title: "Collaborative environment",
      desc: "Work closely with experts across development, design, and growth."
    },
    {
      title: "Opportunity to take ownership",
      desc: "Lead initiatives, propose solutions, and see your ideas come to life."
    },
    {
      title: "Long-term growth",
      desc: "Build your career with an agency focused on sustainable success."
    }
  ];

  return (
    <div className="flex flex-col w-full text-white">
      {/* HERO */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
              Build what's next with us.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
              We're building a team of people who care about technology, creativity, and doing meaningful work for modern businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN ZYQITEK */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">Why join ZYQITEK?</h2>
            <p className="text-xl text-zinc-300">We believe in creating an environment where talented individuals can do their best work.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-zinc-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/12 hover:border-white/25 hover:bg-zinc-900/75 transition-all duration-300 text-white shadow-xl shadow-black/40">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 font-bold bg-white/10 border border-white/15 text-white backdrop-blur-md">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-4">{benefit.title}</h3>
                <p className="text-zinc-300 text-base leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION SECTION */}
      <section className="py-24 md:py-32 px-6 border-t border-white/10 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">Think you'd be a good fit?</h2>
          <p className="text-xl text-zinc-300 mb-16 max-w-2xl mx-auto">
            Choose your area of expertise below and apply to join our growing team.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Category 1 */}
            <div className="bg-zinc-900/70 backdrop-blur-xl border border-white/15 rounded-3xl p-8 text-left shadow-lg hover:border-[#9C8A78]/40 transition-colors flex flex-col h-full">
              <h3 className="text-xl font-bold mb-3 text-white">Development & Technology</h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-8 flex-grow">
                Software engineering, full-stack web, mobile development, cloud architecture, and automation roles.
              </p>
              <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdUKOZHBw_iQlRlc4PHDRZnxl2_4ggMj33waLeBbH0n_MwH2A/viewform?usp=header" target="_blank" rel="noopener noreferrer" variant="outline" className="w-full justify-center">
                Apply Now
              </Button>
            </div>

            {/* Category 2 */}
            <div className="bg-zinc-900/70 backdrop-blur-xl border border-white/15 rounded-3xl p-8 text-left shadow-lg hover:border-[#9C8A78]/40 transition-colors flex flex-col h-full">
              <h3 className="text-xl font-bold mb-3 text-white">Creative & Branding</h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-8 flex-grow">
                Brand identity, UI/UX design, motion graphics, and visual direction roles.
              </p>
              <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdUKOZHBw_iQlRlc4PHDRZnxl2_4ggMj33waLeBbH0n_MwH2A/viewform?usp=header" target="_blank" rel="noopener noreferrer" variant="outline" className="w-full justify-center">
                Apply Now
              </Button>
            </div>

            {/* Category 3 */}
            <div className="bg-zinc-900/70 backdrop-blur-xl border border-white/15 rounded-3xl p-8 text-left shadow-lg hover:border-[#9C8A78]/40 transition-colors flex flex-col h-full">
              <h3 className="text-xl font-bold mb-3 text-white">Marketing & Growth</h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-8 flex-grow">
                SEO, performance marketing, growth strategy, and sales roles.
              </p>
              <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdUKOZHBw_iQlRlc4PHDRZnxl2_4ggMj33waLeBbH0n_MwH2A/viewform?usp=header" target="_blank" rel="noopener noreferrer" variant="outline" className="w-full justify-center">
                Apply Now
              </Button>
            </div>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="text-lg font-bold text-white mb-1">Have a custom inquiry?</h4>
              <p className="text-sm text-zinc-400">Send us your portfolio directly via email.</p>
            </div>
            <Button href="mailto:team.zyqitek@gmail.com?subject=Application" variant="secondary" className="w-full sm:w-auto whitespace-nowrap">
              Apply via Email
            </Button>
          </div>
        </div>
      </section>

      <CTASection 
        heading="Not looking right now?"
        subheading="Follow our journey and stay updated on future opportunities."
        primaryCtaText="Follow on LinkedIn"
        primaryCtaLink="#"
      />
    </div>
  );
}
