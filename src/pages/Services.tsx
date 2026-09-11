import { motion } from 'motion/react';
import { CTASection } from '../components/ui/CTASection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function Services() {
  useDocumentTitle('Capabilities');
  
  return (
    <div className="flex flex-col w-full text-white">
      {/* HERO */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
              Capabilities built around growth.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300">
              Three core capabilities. One connected team.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-6xl pb-32 space-y-28">
        {/* DEVELOPMENT & TECHNOLOGY */}
        <section id="development" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/10 border border-white/15 text-zinc-200 mb-4 inline-block backdrop-blur-md">Capability 01</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Development & Technology</h2>
              <p className="text-xl text-zinc-300 leading-relaxed">
                Custom software, web and mobile applications, cloud infrastructure, and intelligent automation built to scale.
              </p>
            </div>
            
            <div className="lg:col-span-7 bg-zinc-900/60 backdrop-blur-xl p-8 md:p-12 border border-white/12 rounded-3xl shadow-2xl shadow-black/50 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {[
                  { title: "Custom Software", desc: "Tailored software solutions designed for your specific business logic and workflows." },
                  { title: "Web Development", desc: "High-performance web applications built with modern frameworks and best practices." },
                  { title: "Mobile Applications", desc: "Native and cross-platform mobile apps that deliver exceptional user experiences." },
                  { title: "Cloud Infrastructure", desc: "Scalable, secure, and resilient cloud architectures deployed on modern platforms." },
                  { title: "API & Integrations", desc: "Seamlessly connecting your systems and third-party services to streamline operations." },
                  { title: "Intelligent Automation", desc: "Automating repetitive tasks to increase efficiency and reduce operational costs." },
                  { title: "AI Solutions", desc: "Integrating artificial intelligence to unlock new capabilities and insights." }
                ].map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-zinc-300 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CREATIVE & BRANDING */}
        <section id="creative" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:order-last">
              <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/10 border border-white/15 text-zinc-200 mb-4 inline-block backdrop-blur-md">Capability 02</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Creative & Branding</h2>
              <p className="text-xl text-zinc-300 leading-relaxed">
                Brand identity, interface design, motion, and visual systems that give your business a distinctive, premium presence.
              </p>
            </div>
            
            <div className="lg:col-span-7 bg-zinc-900/60 backdrop-blur-xl text-white p-8 md:p-12 border border-white/12 rounded-3xl shadow-2xl shadow-black/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {[
                  { title: "Brand Identity", desc: "Defining your core identity, voice, and positioning to stand out in the market." },
                  { title: "UI/UX Design", desc: "Intuitive, accessible, and user-centric interfaces designed to convert and engage." },
                  { title: "Web Design", desc: "Premium website designs that reflect your brand and deliver a seamless digital experience." },
                  { title: "Motion Design", desc: "Subtle, purposeful animations that elevate interactions and guide user attention." },
                  { title: "Visual Systems", desc: "Comprehensive design systems ensuring consistency across all your digital touchpoints." },
                  { title: "Creative Direction", desc: "Strategic oversight to ensure all creative output aligns with your business goals." }
                ].map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-zinc-300 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MARKETING & GROWTH */}
        <section id="growth" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/10 border border-white/15 text-zinc-200 mb-4 inline-block backdrop-blur-md">Capability 03</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Marketing & Growth</h2>
              <p className="text-xl text-zinc-300 leading-relaxed">
                SEO, performance marketing, content strategy, and analytics engineered to drive measurable, sustainable growth.
              </p>
            </div>
            
            <div className="lg:col-span-7 bg-zinc-900/60 backdrop-blur-xl p-8 md:p-12 border border-white/12 rounded-3xl shadow-2xl shadow-black/50 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {[
                  { title: "SEO", desc: "Data-driven search engine optimization to improve organic visibility and drive high-intent traffic." },
                  { title: "Performance Marketing", desc: "Targeted paid campaigns optimized for ROI, conversions, and customer acquisition." },
                  { title: "Content Strategy", desc: "Strategic content planning and creation that engages your audience and builds authority." },
                  { title: "Analytics", desc: "Comprehensive tracking and reporting to measure performance and inform business decisions." },
                  { title: "Conversion Optimization", desc: "Continuous testing and refinement to maximize the effectiveness of your digital assets." },
                  { title: "Growth Strategy", desc: "Holistic planning combining technology, creative, and marketing to scale your business." }
                ].map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-zinc-300 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <CTASection 
        heading="Have a project in mind?"
        subheading="Tell us what you're working on. We'll bring the strategy, technology, and creative execution to help move it forward."
        primaryCtaText="Let's Talk"
        primaryCtaLink="https://docs.google.com/forms/d/e/1FAIpQLSe-L3qZRRmCyVGZgy6tZZ080dP-8mSh2X6AWNrAloHcNAD6Nw/viewform?usp=header"
      />
    </div>
  );
}
