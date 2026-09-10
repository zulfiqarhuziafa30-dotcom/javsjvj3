import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Typewriter from 'typewriter-effect';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BlogCard } from '../components/ui/BlogCard';
import { CTASection } from '../components/ui/CTASection';
import { ArrowRight, Code2, Palette, TrendingUp, ShieldCheck, Zap, Layers } from 'lucide-react';

export function Home() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="flex flex-col w-full text-white">
      {/* HERO - Clean, spacious, and impactful */}
      <section className="pt-24 pb-20 md:pt-36 md:pb-28 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-xs font-semibold tracking-widest text-zinc-300 uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
              Digital Agency · Est. 2024
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold italic font-display tracking-tight text-zinc-100 mb-8 leading-[1.05]">
              Digital Solutions.<br />
              <span className="text-zinc-300">
                {prefersReducedMotion ? (
                  "Built to Grow."
                ) : (
                  <Typewriter
                    options={{
                      strings: ['Built to Grow.', 'Engineered to Scale.', 'Designed to Convert.'],
                      autoStart: true,
                      loop: true,
                      delay: 60,
                      deleteSpeed: 30,
                      pauseFor: 2000,
                      cursor: '|',
                    }}
                  />
                )}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10">
              ZYQITEK helps ambitious businesses build, improve, and scale through custom technology, creative design, and digital growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button href="#contact" variant="primary" className="w-full sm:w-auto px-8 py-3.5">
                Start a Project
              </Button>
              <Button href="/services" variant="outline" className="w-full sm:w-auto px-8 py-3.5">
                Explore Capabilities
              </Button>
            </div>

            {/* Quiet trust highlights */}
            <div className="mt-16 pt-10 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">95%</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">Client Retention</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">Full-Stack</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">Tech Execution</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">Design</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">Brand Systems</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">Growth</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">Scale & Analytics</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE SERVICES - Simple 3-Card Grid */}
      <section className="py-20 md:py-28 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading 
            heading="Core capabilities."
            subheading="Everything required to build, launch, and scale modern digital products under one roof."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Capability 01 */}
            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#9C8A78]/30 transition-all duration-300">
              <div>
                <div className="w-12 h-12 bg-[#9C8A78]/10 border border-[#9C8A78]/20 rounded-2xl flex items-center justify-center mb-6 text-[#B0A08D]">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B0A08D]">01 / Tech</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-3">Development & Technology</h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  Custom software, web and mobile apps, scalable cloud architectures, and intelligent AI automation tailored to your workflows.
                </p>
              </div>
              <a href="/services#development" className="text-sm font-semibold text-[#B0A08D] hover:text-[#C5B7A6] flex items-center gap-2 group transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Capability 02 */}
            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#9C8A78]/30 transition-all duration-300">
              <div>
                <div className="w-12 h-12 bg-[#9C8A78]/10 border border-[#9C8A78]/20 rounded-2xl flex items-center justify-center mb-6 text-[#B0A08D]">
                  <Palette className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B0A08D]">02 / Design</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-3">Creative & Branding</h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  Brand identity, UI/UX interface systems, motion design, and visual direction designed to stand out in crowded markets.
                </p>
              </div>
              <a href="/services#creative" className="text-sm font-semibold text-[#B0A08D] hover:text-[#C5B7A6] flex items-center gap-2 group transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Capability 03 */}
            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#9C8A78]/30 transition-all duration-300">
              <div>
                <div className="w-12 h-12 bg-[#9C8A78]/10 border border-[#9C8A78]/20 rounded-2xl flex items-center justify-center mb-6 text-[#B0A08D]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B0A08D]">03 / Growth</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-3">Marketing & Growth</h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  SEO, conversion optimization, performance marketing, and analytics engineered to acquire and retain real customers.
                </p>
              </div>
              <a href="/services#growth" className="text-sm font-semibold text-[#B0A08D] hover:text-[#C5B7A6] flex items-center gap-2 group transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ZYQITEK - Clean Value Proposition */}
      <section className="py-20 md:py-28 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading 
            heading="Built for serious businesses."
            subheading="Good digital work needs to function reliably, scale gracefully, and create sustainable business value."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 text-white">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Built to Scale</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                We engineer systems that meet your current requirements without boxing you in when demand expands.
              </p>
            </div>

            <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 text-white">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">One Connected Team</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Designers, engineers, and growth specialists operate as one unit rather than disconnected contractors.
              </p>
            </div>

            <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Long-Term Thinking</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                We prioritize sustainable technical architecture, clear communication, and enduring client partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS PREVIEW - Simple 4-step row */}
      <section className="py-20 md:py-28 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading 
              heading="From idea to impact."
              subheading="A direct, 4-phase process that keeps every project focused and transparent."
              className="mb-0"
            />
            <Button href="/our-process" variant="outline" className="shrink-0">
              Full Process
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Discover', desc: 'Understand the business goals, audience, and technical requirements.' },
              { num: '02', title: 'Plan', desc: 'Define strategy, scope priorities, architecture, and the roadmap.' },
              { num: '03', title: 'Build', desc: 'Design, develop, test, and polish with consistent milestone check-ins.' },
              { num: '04', title: 'Grow', desc: 'Launch, monitor performance, and continuously optimize for outcomes.' },
            ].map((step) => (
              <div key={step.num} className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6">
                <span className="text-xs font-mono font-bold text-zinc-400 block mb-3">{step.num}</span>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS / BLOG PREVIEW */}
      <section className="py-20 md:py-28 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading 
            heading="Ideas and insights."
            subheading="Perspectives on technology, design strategy, and digital growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard 
              category="Agency"
              title="About ZYQITEK: Building Digital Solutions That Last"
              excerpt="Our story, foundational principles, and why 95% of our clients return for long-term partnerships."
              link="/blog"
            />
            <BlogCard 
              category="Digital Strategy"
              title="Why Your Digital Presence Needs More Than a Website"
              excerpt="How engineering, branding, user experience, and growth marketing connect."
              link="/blog"
            />
            <BlogCard 
              category="Technology"
              title="Building for Growth: Why Scalable Digital Solutions Matter"
              excerpt="Key architectural considerations when investing in technology built to last."
              link="/blog"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA - Clean & direct */}
      <CTASection 
        heading="Ready to build what's next?"
        subheading="Tell us about your project. We'll bring the strategy, technology, and execution to move it forward."
        primaryCtaText="Start a Project"
        primaryCtaLink="#contact"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
      />
    </div>
  );
}
