import { cn } from './utils';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  heading: ReactNode;
  subheading?: ReactNode;
  className?: string;
}

export function SectionHeading({ heading, subheading, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl mb-16", className)}>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-heading">
        {heading}
      </h2>
      {subheading && (
        <p className="text-xl leading-relaxed text-body">
          {subheading}
        </p>
      )}
    </div>
  );
}
