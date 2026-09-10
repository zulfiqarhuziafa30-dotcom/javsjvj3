import { motion, useReducedMotion } from 'motion/react';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  key?: string | number;
}

export function Reveal({ children, delay = 0, className = '', direction = 'up' }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialY = () => {
    if (direction === 'up') return 30;
    if (direction === 'down') return -30;
    return 0;
  };

  const getInitialX = () => {
    if (direction === 'left') return 30;
    if (direction === 'right') return -30;
    return 0;
  };

  const initial = shouldReduceMotion 
    ? { opacity: 0 } 
    : { opacity: 0, y: getInitialY(), x: getInitialX() };

  const animate = { opacity: 1, y: 0, x: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
