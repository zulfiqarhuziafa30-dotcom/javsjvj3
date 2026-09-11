import { motion } from 'motion/react';

export function ClientLogos() {
  const logos = [
    "ACME Corp", "GlobalTech", "Nexus Industries", "Quantum Labs", "Pinnacle Data"
  ];

  return (
    <div className="py-12 border-t border-white/10 bg-zinc-950">
      <div className="container mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-8">
          Trusted by innovative teams worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-lg md:text-xl font-bold font-display text-zinc-400"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
