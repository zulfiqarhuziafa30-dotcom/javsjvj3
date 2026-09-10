import { motion } from 'motion/react';
import { CTASection } from '../components/ui/CTASection';

export function OurProcess() {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "Understand your business, goals, audience, challenges, and requirements."
    },
    {
      num: "02",
      title: "PLAN",
      desc: "Turn requirements into a clear strategy, priorities, and execution roadmap."
    },
    {
      num: "03",
      title: "BUILD",
      desc: "Design, develop, execute, test, and refine the solution."
    },
    {
      num: "04",
      title: "LAUNCH",
      desc: "Bring the final product, campaign, or brand to market."
    },
    {
      num: "05",
      title: "GROW",
      desc: "Measure performance, identify opportunities, and continuously improve."
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
              How we build for growth.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300">
              A straightforward process designed to keep projects focused and outcomes clear.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-6 md:before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-white/50 before:via-white/20 before:to-white/5">
            {steps.map((step, index) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-zinc-950 bg-white text-zinc-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl font-black text-sm z-10 ml-0 md:ml-auto">
                  {step.num}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-zinc-900/60 backdrop-blur-xl rounded-3xl p-8 border border-white/12 shadow-2xl ml-6 md:ml-0 hover:border-white/25 hover:bg-zinc-900/75 transition-all duration-300 text-white">
                  <h3 className="font-bold text-2xl tracking-tight text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-300 text-base leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNICATION SECTION */}
      <section className="py-24 border-t border-white/10 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Clear communication. <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">No unnecessary complexity.</span>
          </h2>
          <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            We believe that great work requires great communication. ZYQITEK keeps projects organized, updates frequent, and communication clear so you always know exactly where things stand.
          </p>
        </div>
      </section>

      <CTASection 
        heading="Ready to start the process?"
        subheading="Let's discuss your next project and how we can bring it to life."
        primaryCtaText="Get in Touch"
        primaryCtaLink="#contact"
      />
    </div>
  );
}
