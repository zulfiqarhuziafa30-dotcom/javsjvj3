import { ZyqitekLogo } from './ZyqitekLogo';

export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-6 bg-surface/30 backdrop-blur-xl border-t border-white/10 text-body flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest gap-4 mt-auto">
      <div className="flex items-center gap-2.5 text-body">
        <ZyqitekLogo className="w-5 h-5 opacity-90" />
        <span>© 2026 ZYQITEK. All rights reserved.</span>
      </div>
      <div className="flex gap-6 text-body">
        <span className="hover:text-heading transition-colors">Development</span>
        <span className="hover:text-heading transition-colors">Creative</span>
        <span className="hover:text-heading transition-colors">Growth</span>
      </div>
      <span className="text-body">Digital Solutions. Built to Grow.</span>
    </footer>
  );
}
