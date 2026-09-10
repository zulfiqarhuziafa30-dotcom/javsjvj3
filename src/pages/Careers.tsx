import { motion } from 'motion/react';
import { CTASection } from '../components/ui/CTASection';
import { Button } from '../components/ui/Button';

export function Careers() {
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
              <div key={idx} className="bg-zinc-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/12 hover:border-white/25 hover:bg-zinc-900/75 transition-all duration-300 text-white shadow-xl">
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
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">Think you'd be a good fit?</h2>
          <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto">
            Tell us what you can bring to ZYQITEK. We are always looking for talented developers, designers, and marketers.
          </p>
          
          <div className="bg-zinc-900/70 backdrop-blur-xl border border-white/15 rounded-3xl p-8 md:p-12 text-left shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">General Application</h3>
            <p className="text-zinc-300 mb-8 leading-relaxed">
              Send us your portfolio, GitHub, or resume along with a brief introduction about yourself and how you can contribute to our team.
            </p>
            <Button href="mailto:careers@zyqitek.com" variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
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
