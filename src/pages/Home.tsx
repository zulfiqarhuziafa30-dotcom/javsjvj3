import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BlogCard } from '../components/ui/BlogCard';
import { CTASection } from '../components/ui/CTASection';
import { ArrowRight, Code2, Palette, TrendingUp, ShieldCheck, Zap, Layers } from 'lucide-react';

const CLIENT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe-L3qZRRmCyVGZgy6tZZ080dP-8mSh2X6AWNrAloHcNAD6Nw/viewform?usp=header";

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO - Clean, spacious, and impactful */}
      <section className="pt-24 pb-20 md:pt-36 md:pb-28 px-6 text-center relative overflow-hidden">
        {/* Absolute backdrop scoped to hero only */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-40 bg-cover bg-center bg-no-repeat mix-blend-screen"
          style={{ backgroundImage: "url('/studio-backdrop.jpg')" }}
        />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-xs font-semibold tracking-widest text-muted uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
              Digital Agency · Est. 2024
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-heading mb-8 leading-[1.05]">
              Digital Solutions.<br />
              <span className="text-heading">
                Built to Grow.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-body max-w-2xl mx-auto leading-relaxed mb-10">
              ZYQITEK helps ambitious businesses build, improve, and scale through custom technology, creative design, and digital growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button href={CLIENT_FORM_URL} variant="primary" className="w-full sm:w-auto">
                Start a Project
              </Button>
              <Button href="/services" variant="outline" className="w-full sm:w-auto">
                Explore Capabilities
              </Button>
            </div>

            {/* Quiet trust highlights */}
            <div className="mt-16 pt-10 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-heading">95%</div>
                <div className="text-xs text-muted mt-1 uppercase tracking-wider">Client Retention</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-heading">Full-Stack</div>
                <div className="text-xs text-muted mt-1 uppercase tracking-wider">Tech Execution</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-heading">Design</div>
                <div className="text-xs text-muted mt-1 uppercase tracking-wider">Brand Systems</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-heading">Growth</div>
                <div className="text-xs text-muted mt-1 uppercase tracking-wider">Scale & Analytics</div>
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
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Capability 01 */}
            <div className="bg-surface border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-muted">01 / Tech</span>
                <h3 className="text-2xl font-bold text-heading mt-2 mb-3">Development & Technology</h3>
                <p className="text-sm text-body leading-relaxed mb-6">
                  Custom software, web and mobile apps, scalable cloud architectures, and intelligent AI automation tailored to your workflows.
                </p>
              </div>
              <a href="/services#development" className="text-sm font-semibold text-accent hover:text-accent/80 flex items-center gap-2 group transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Capability 02 */}
            <div className="bg-surface border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
                  <Palette className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-muted">02 / Design</span>
                <h3 className="text-2xl font-bold text-heading mt-2 mb-3">Creative & Branding</h3>
                <p className="text-sm text-body leading-relaxed mb-6">
                  Brand identity, UI/UX interface systems, motion design, and visual direction designed to stand out in crowded markets.
                </p>
              </div>
              <a href="/services#creative" className="text-sm font-semibold text-accent hover:text-accent/80 flex items-center gap-2 group transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Capability 03 */}
            <div className="bg-surface border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-muted">03 / Growth</span>
                <h3 className="text-2xl font-bold text-heading mt-2 mb-3">Marketing & Growth</h3>
                <p className="text-sm text-body leading-relaxed mb-6">
                  SEO, conversion optimization, performance marketing, and analytics engineered to acquire and retain real customers.
                </p>
              </div>
              <a href="/services#growth" className="text-sm font-semibold text-accent hover:text-accent/80 flex items-center gap-2 group transition-colors">
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
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface border border-white/10 rounded-2xl p-8">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 text-accent">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">Built to Scale</h3>
              <p className="text-sm text-body leading-relaxed">
                We engineer systems that meet your current requirements without boxing you in when demand expands.
              </p>
            </div>

            <div className="bg-surface border border-white/10 rounded-2xl p-8">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 text-accent">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">One Connected Team</h3>
              <p className="text-sm text-body leading-relaxed">
                Designers, engineers, and growth specialists operate as one unit rather than disconnected contractors.
              </p>
            </div>

            <div className="bg-surface border border-white/10 rounded-2xl p-8">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 text-accent">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">Long-Term Thinking</h3>
              <p className="text-sm text-body leading-relaxed">
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
              theme="dark"
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
              <div key={step.num} className="bg-surface border border-white/10 rounded-2xl p-6 shadow-sm">
                <span className="text-xs font-mono font-bold text-accent block mb-3">{step.num}</span>
                <h3 className="text-xl font-bold text-heading mb-2">{step.title}</h3>
                <p className="text-body text-sm leading-relaxed">{step.desc}</p>
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
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard 
              category="Agency"
              title="About ZYQITEK: Building Digital Solutions That Last"
              excerpt="Our story, foundational principles, and why 95% of our clients return for long-term partnerships."
              link="/blog"
              isDark={true}
            />
            <BlogCard 
              category="Digital Strategy"
              title="Why Your Digital Presence Needs More Than a Website"
              excerpt="How engineering, branding, user experience, and growth marketing connect."
              link="/blog"
              isDark={true}
            />
            <BlogCard 
              category="Technology"
              title="Building for Growth: Why Scalable Digital Solutions Matter"
              excerpt="Key architectural considerations when investing in technology built to last."
              link="/blog"
              isDark={true}
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA - Clean & direct */}
      <CTASection 
        heading="Ready to build what's next?"
        subheading="Tell us about your project. We'll bring the strategy, technology, and execution to move it forward."
        primaryCtaText="Start a Project"
        primaryCtaLink={CLIENT_FORM_URL}
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
      />
    </div>
  );
}
