import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Typewriter from 'typewriter-effect';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BlogCard } from '../components/ui/BlogCard';
import { CTASection } from '../components/ui/CTASection';
import { ProcessRoadmap } from '../components/ui/ProcessRoadmap';
import { LINKS } from "../config/constants";
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { ArrowRight, Code2, Palette, TrendingUp, ShieldCheck, Zap, Layers } from 'lucide-react';

export function Home() {
  useDocumentTitle('Home', 'ZYQITEK is a digital agency focused on engineering, design, and growth.');
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
      {/* HERO */}
      <section className="pt-24 pb-20 md:pt-36 md:pb-28 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold tracking-widest text-zinc-300 uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
              Digital, Done Better
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
              We build custom software, design distinctive brands, and drive digital growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button href={LINKS.forms.generalContact} target="_blank" rel="noopener noreferrer" variant="primary" className="w-full sm:w-auto px-8 py-3.5">
                Start a Project
              </Button>
              <Button href="/services" variant="outline" className="w-full sm:w-auto px-8 py-3.5">
                Explore Capabilities
              </Button>
            </div>

            {/* Quiet trust highlights */}
            <div className="mt-16 pt-10 border-t border-white/10 w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-3xl mx-auto">
              <div>
                <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">Senior-Level Care</div>
                <div className="text-xs text-zinc-400">Direct partner access on every engagement.</div>
              </div>
              <div>
                <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">Focused Portfolio</div>
                <div className="text-xs text-zinc-400">Select client roster to guarantee execution.</div>
              </div>
              <div>
                <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">Clear Roadmaps</div>
                <div className="text-xs text-zinc-400">Transparent milestones with weekly updates.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES - 3-Card Grid with Scannable Tags */}
      <section className="py-20 md:py-28 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading 
            heading="Core capabilities."
            subheading="Three disciplines. One integrated partner."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Capability 01 */}
            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#9C8A78]/40 transition-all duration-300 shadow-xl shadow-black/40">
              <div>
                <div className="w-12 h-12 bg-[#9C8A78]/10 border border-[#9C8A78]/20 rounded-2xl flex items-center justify-center mb-6 text-[#B0A08D]">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B0A08D]">01 / Tech</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-2">Development</h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  Custom software, web apps, cloud systems, and intelligent automation.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {['Web Apps', 'Mobile', 'Cloud', 'AI Workflows'].map((tag) => (
                    <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a href="/services#development" className="text-sm font-semibold text-[#B0A08D] hover:text-[#C5B7A6] flex items-center gap-2 group transition-colors">
                <span>View Tech Details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Capability 02 */}
            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#9C8A78]/40 transition-all duration-300 shadow-xl shadow-black/40">
              <div>
                <div className="w-12 h-12 bg-[#9C8A78]/10 border border-[#9C8A78]/20 rounded-2xl flex items-center justify-center mb-6 text-[#B0A08D]">
                  <Palette className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B0A08D]">02 / Design</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-2">Creative & Brand</h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  Brand identities, UI/UX systems, and high-converting digital interfaces.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {['Brand Identity', 'UI/UX Design', 'Design Systems', 'Motion'].map((tag) => (
                    <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a href="/services#creative" className="text-sm font-semibold text-[#B0A08D] hover:text-[#C5B7A6] flex items-center gap-2 group transition-colors">
                <span>View Creative Details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Capability 03 */}
            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#9C8A78]/40 transition-all duration-300 shadow-xl shadow-black/40">
              <div>
                <div className="w-12 h-12 bg-[#9C8A78]/10 border border-[#9C8A78]/20 rounded-2xl flex items-center justify-center mb-6 text-[#B0A08D]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B0A08D]">03 / Growth</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-2">Marketing</h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  Targeted SEO, paid acquisition, conversion audits, and ROI analytics.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {['Search SEO', 'Performance Ads', 'CRO Audits', 'Analytics'].map((tag) => (
                    <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a href="/services#growth" className="text-sm font-semibold text-[#B0A08D] hover:text-[#C5B7A6] flex items-center gap-2 group transition-colors">
                <span>View Growth Details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ZYQITEK - 3 Scannable Cards */}
      <section className="py-20 md:py-28 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading 
            heading="Why work with us."
            subheading="Built for stability, velocity, and enduring business value."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-[#9C8A78]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-[#B0A08D]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Built to Scale</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Architectures that handle surging traffic without costly rebuilds.
              </p>
            </div>

            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-[#9C8A78]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-[#B0A08D]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">One Unified Team</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Engineers, designers, and marketers aligned around your KPIs.
              </p>
            </div>

            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-[#9C8A78]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-[#B0A08D]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Long-Term Quality</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Clean maintainable code, transparent milestones, and zero lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS ROADMAP - Visual Animated Timeline */}
      <section className="py-20 md:py-28 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading 
            heading="How we work."
            subheading="A four-phase framework from discovery to sustainable growth."
          />

          <ProcessRoadmap />
        </div>
      </section>

      {/* INSIGHTS / BLOG PREVIEW */}
      <section className="py-20 md:py-28 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading 
            heading="Latest thinking."
            subheading="Practical insights on engineering, design, and growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard 
              category="Agency"
              title="About ZYQITEK: Digital Solutions That Last"
              excerpt="Our philosophy on why 95% of clients return for ongoing partnerships."
              link="/blog"
            />
            <BlogCard 
              category="Strategy"
              title="Why Your Digital Presence Needs More Than a Site"
              excerpt="Connecting technology, branding, and conversion into one ecosystem."
              link="/blog"
            />
            <BlogCard 
              category="Technology"
              title="How Modern Technology Helps Businesses Scale"
              excerpt="Architectural principles for investing in software that avoids rewrite debt."
              link="/blog"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection 
        heading="Let's build together."
        subheading="Bring us your goals. We'll engineer the solution."
        primaryCtaText="Start a Project"
        primaryCtaLink={LINKS.forms.generalContact}
        secondaryCtaText="Our Capabilities"
        secondaryCtaLink="/services"
      />
    </div>
  );
}

