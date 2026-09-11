import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CTASection } from '../components/ui/CTASection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { CONTACT } from '../config/constants';

export function Blog() {
  useDocumentTitle('Insights', 'Read our latest thinking on technology, design, and building businesses for what comes next.');
  const articles = [
    {
      category: "Digital Strategy",
      title: "Why Your Digital Presence Needs More Than a Website",
      excerpt: "Connecting technology, branding, and conversion into a cohesive ecosystem.",
      link: "#"
    },
    {
      category: "Technology",
      title: "How Modern Technology Helps Businesses Scale",
      excerpt: "Architectural choices and automations that let modern businesses scale without friction.",
      link: "#"
    },
    {
      category: "Branding",
      title: "The Role of Branding in a Competitive Digital Market",
      excerpt: "Why distinct visual identity and sharp positioning are high-leverage assets.",
      link: "#"
    },
    {
      category: "Agency",
      title: "Why Long-Term Digital Partnerships Matter",
      excerpt: "How avoiding quick-fix shortcuts eliminates technical debt and builds enduring equity.",
      link: "#"
    },
    {
      category: "Design",
      title: "Designing Products People Actually Want to Use",
      excerpt: "User-centered design principles that turn first-time visitors into loyal customers.",
      link: "#"
    }
  ];

  return (
    <div className="flex flex-col w-full text-white">
      {/* HERO */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#B0A08D] uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6 inline-block">
              Perspectives
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white font-display">
              Ideas behind better digital work.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-xl mx-auto">
              Insights on engineering, brand strategy, and scalable growth.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-7xl">
          <Link to="#" className="group block">
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/12 rounded-3xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden transition-all duration-300 hover:border-[#9C8A78]/40 shadow-2xl shadow-black/50">
              <div className="bg-gradient-to-b from-zinc-950 via-black to-zinc-950 p-10 lg:p-20 flex items-center justify-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-70"></div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white relative z-10 text-center leading-tight">
                  ZYQITEK <br/>
                  <span className="text-[#B0A08D]">EST. 2024</span>
                </h2>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#9C8A78]/15 text-[#B0A08D] border border-[#9C8A78]/30 mb-4 inline-block w-fit">
                  Featured · Agency
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 group-hover:text-[#B0A08D] transition-colors leading-tight">
                  About ZYQITEK: Building Digital Solutions That Last
                </h3>
                <p className="text-zinc-300 text-sm md:text-base mb-6 leading-relaxed">
                  How aligning technology, design, and marketing eliminates silos and creates sustainable digital growth.
                </p>
                <span className="inline-flex items-center text-[#B0A08D] font-semibold mt-auto group-hover:text-white transition-colors text-sm">
                  Read Full Story
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* MORE ARTICLES */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <Link to={article.link} className="group block h-full">
                  <article className="border border-white/10 bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-[#9C8A78]/40 hover:bg-zinc-900/70 shadow-xl shadow-black/40 h-full flex flex-col text-white">
                    <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/10 mb-4 inline-block w-fit">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-[#B0A08D] transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center text-xs font-semibold text-[#B0A08D] mt-auto group-hover:text-white transition-colors">
                      Read Article
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        heading="Let's build something great."
        subheading="Bring us your challenges. We'll engineer the solutions."
        primaryCtaText="Contact Us"
        primaryCtaLink={`mailto:${CONTACT.general.email}?subject=Inquiry%20from%20Website`}
      />
    </div>
  );
}

