import { ZyqitekLogo } from './ZyqitekLogo';

export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-6 bg-zinc-950/75 backdrop-blur-xl border-t border-white/10 text-zinc-400 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest gap-4 mt-auto">
      <div className="flex items-center gap-2.5 text-zinc-300">
        <ZyqitekLogo className="w-5 h-5 opacity-90" />
        <span>© 2026 ZYQITEK. All rights reserved.</span>
      </div>
      <div className="flex gap-6 text-zinc-400">
        <span className="hover:text-white transition-colors">Development</span>
        <span className="hover:text-white transition-colors">Creative</span>
        <span className="hover:text-white transition-colors">Growth</span>
      </div>
      <span className="text-zinc-400">Digital Solutions. Built to Grow.</span>
    </footer>
  );
}
