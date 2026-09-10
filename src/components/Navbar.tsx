import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from './ui/utils';
import { motion, AnimatePresence } from 'motion/react';
import { ZyqitekLogo } from './ZyqitekLogo';

const CLIENT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe-L3qZRRmCyVGZgy6tZZ080dP-8mSh2X6AWNrAloHcNAD6Nw/viewform?usp=header";

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
        'sticky z-50 flex items-center justify-between px-6 md:px-8 py-4 transition-all duration-300',
        'md:mx-auto md:w-[95%] md:max-w-6xl',
        isScrolled
          ? 'top-0 md:top-6 bg-surface/85 backdrop-blur-2xl border-b md:border border-white/10 shadow-2xl shadow-black/80 md:rounded-full'
          : 'top-0 md:top-6 bg-surface/30 backdrop-blur-xl border-b md:border border-white/5 md:rounded-full'
      )}
    >
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center gap-2.5 text-2xl font-black tracking-tighter text-heading z-50 group">
          <ZyqitekLogo className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-heading via-zinc-200 to-body group-hover:via-white transition-all">ZYQITEK</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-200",
                  isActive 
                    ? "text-heading font-semibold bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/10" 
                    : "text-body hover:text-heading hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="hidden md:block">
        <Button href={CLIENT_FORM_URL} variant="primary" className="px-6 py-2 rounded-full text-sm">Let's Work Together</Button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden z-50 p-2 text-heading"
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
            className="fixed inset-0 top-0 pt-24 bg-bg-dark/95 backdrop-blur-2xl border-b border-white/10 z-40 flex flex-col px-6 pb-6 md:hidden overflow-y-auto"
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
                        ? "text-heading font-bold border-l-2 border-accent pl-3 bg-white/5 rounded-r-lg" 
                        : "text-body hover:text-heading pl-3"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto">
              <Button href={CLIENT_FORM_URL} variant="primary" className="w-full">Let's Work Together</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
