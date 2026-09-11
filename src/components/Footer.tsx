import { Link, useLocation } from 'react-router-dom';
import { ZyqitekLogo } from './ZyqitekLogo';
import { Twitter, Linkedin, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const location = useLocation();
  const isCareers = location.pathname === '/careers';

  return (
    <footer className="bg-zinc-950 border-t border-white/10 text-zinc-400 pt-16 pb-8 px-6 md:px-10 mt-auto">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5 text-xl font-black tracking-tighter text-white group w-fit">
              <ZyqitekLogo className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">ZYQITEK</span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400 max-w-xs mt-2">
              A premium digital agency combining intelligent technology, elegant creative execution, and targeted digital growth.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-2">Explore</h4>
            <Link to="/services" className="text-sm hover:text-white transition-colors w-fit">Services</Link>
            <Link to="/our-process" className="text-sm hover:text-white transition-colors w-fit">Our Process</Link>
            <Link to="/blog" className="text-sm hover:text-white transition-colors w-fit">Insights</Link>
            <Link to="/careers" className="text-sm hover:text-white transition-colors w-fit">Careers</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-2">Contact</h4>
            {!isCareers ? (
              <>
                <a href="mailto:zyqitek@gmail.com?subject=Inquiry%20from%20Website" className="text-sm hover:text-white transition-colors w-fit flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  zyqitek@gmail.com
                </a>
                <a href="tel:+3442897220" className="text-sm hover:text-white transition-colors w-fit flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +3442897220
                </a>
                <span className="text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Karachi, Pakistan
                </span>
              </>
            ) : (
              <>
                <a href="mailto:team.zyqitek@gmail.com?subject=Application" className="text-sm hover:text-white transition-colors w-fit flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  team.zyqitek@gmail.com
                </a>
                <a href="tel:+923061079757" className="text-sm hover:text-white transition-colors w-fit flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +923061079757
                </a>
              </>
            )}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-2">Social</h4>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Twitter" className="text-zinc-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" aria-label="LinkedIn" className="text-zinc-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" aria-label="Instagram" className="text-zinc-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" aria-label="Github" className="text-zinc-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase">
          <span>© {new Date().getFullYear()} ZYQITEK. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
