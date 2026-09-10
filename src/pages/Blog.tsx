import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CTASection } from '../components/ui/CTASection';
import { Reveal } from '../components/ui/Reveal';

const CLIENT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe-L3qZRRmCyVGZgy6tZZ080dP-8mSh2X6AWNrAloHcNAD6Nw/viewform?usp=header";

export function Blog() {
  const articles = [
    {
      category: "Digital Strategy",
      title: "Why Your Digital Presence Needs More Than a Website",
      excerpt: "In today's landscape, a website is just the foundation. Discover how technology, branding, UX, and marketing must work together to create a cohesive digital ecosystem.",
      link: "#"
    },
    {
      category: "Technology",
      title: "How Technology Can Help Businesses Scale",
      excerpt: "Explore the systems, architectures, and intelligent automations that enable modern businesses to scale efficiently without sacrificing quality or customer experience.",
      link: "#"
    },
    {
      category: "Branding",
      title: "The Role of Branding in a Competitive Digital Market",
      excerpt: "Why a distinctive visual identity and clear positioning are your strongest assets in an increasingly crowded digital landscape.",
      link: "#"
    },
    {
      category: "Agency",
      title: "Why Long-Term Digital Partnerships Matter",
      excerpt: "Short-term execution often leads to technical debt. Learn why sustainable solutions and long-term relationships drive better digital outcomes.",
      link: "#"
    },
    {
      category: "Design",
      title: "Designing Digital Products People Actually Want to Use",
      excerpt: "A look into our UI/UX philosophy and why putting the user's needs at the center of the design process is non-negotiable.",
      link: "#"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-heading">
              Ideas behind better digital work.
            </h1>
            <p className="text-xl md:text-2xl text-body">
              Insights on technology, branding, digital growth, and building businesses for what's next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <Link to="#" className="group block">
              <div className="bg-surface border border-white/10 rounded-3xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden transition-all duration-300 hover:border-white/20 shadow-2xl">
                <div className="bg-gradient-to-b from-bg-dark via-black to-bg-dark p-12 lg:p-24 flex items-center justify-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-70"></div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-heading relative z-10 text-center leading-tight">
                    ZYQITEK <br/>
                    <span className="text-accent">EST. 2024</span>
                  </h2>
                </div>
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/5 text-muted border border-white/10 mb-4 inline-block w-fit backdrop-blur-md">
                    Featured · Agency
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-heading mb-6 group-hover:text-accent transition-colors leading-tight">
                    About ZYQITEK: Building Digital Solutions That Last
                  </h3>
                  <p className="text-body text-base md:text-lg mb-8 leading-relaxed">
                    Founded in 2024, ZYQITEK was built on a simple premise: technology, creative work, and marketing shouldn't operate in silos. Discover our vision for the future, our focus on quality, and why 95% of our clients return for repeat business.
                  </p>
                  <span className="inline-flex items-center text-accent font-semibold mt-auto group-hover:text-accent/80 transition-colors text-lg">
                    Read Full Story
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* MORE ARTICLES */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <Link to={article.link} className="group block h-full">
                  <article className="border border-white/10 bg-surface rounded-3xl p-8 md:p-10 transition-all duration-300 hover:border-white/20 hover:bg-surface/80 shadow-xl h-full flex flex-col">
                    <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/5 text-muted border border-white/10 mb-4 inline-block w-fit backdrop-blur-md">
                      {article.category}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-heading mb-4 group-hover:text-accent transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-body text-base leading-relaxed mb-8 flex-grow">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center text-accent font-semibold mt-auto group-hover:text-accent/80 transition-colors">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        heading="Let's build something great."
        subheading="Bring us your challenges. We'll bring the solutions."
        primaryCtaText="Contact Us"
        primaryCtaLink={CLIENT_FORM_URL}
      />
    </div>
  );
}
