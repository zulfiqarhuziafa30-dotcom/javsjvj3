import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from './ui/utils';
import { motion, AnimatePresence } from 'motion/react';
import { ZyqitekLogo } from './ZyqitekLogo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Our Process', path: '/our-process' },
  { name: 'Blog', path: '/blog' },
  { name: 'Careers', path: '/careers' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        'sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-300',
        isScrolled
          ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60'
          : 'bg-zinc-950/50 backdrop-blur-md border-b border-white/10'
      )}
    >
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center gap-2.5 text-2xl font-black tracking-tighter text-white z-50 group">
          <ZyqitekLogo className="w-8 h-8 transition-transform duration-200 group-hover:scale-105" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-400">ZYQITEK</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1.5 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg transition-all duration-150",
                  isActive 
                    ? "text-white font-semibold bg-white/15 shadow-sm border border-white/10" 
                    : "text-zinc-300 hover:text-white hover:bg-white/10"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="hidden md:block">
        <Button href="/#contact" variant="primary" className="px-6 py-2 rounded-full text-sm">Let's Work Together</Button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden z-50 p-2 text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 pt-24 bg-zinc-950/95 backdrop-blur-2xl border-b border-white/10 z-40 flex flex-col px-6 pb-6 md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col space-y-4 text-xl font-display font-medium mb-12">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className={cn(
                      "py-2 transition-colors",
                      isActive 
                        ? "text-white font-bold border-l-2 border-white pl-3 bg-white/5 rounded-r-lg" 
                        : "text-zinc-400 hover:text-white pl-3"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto">
              <Button href="/#contact" variant="primary" className="w-full">Let's Work Together</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
