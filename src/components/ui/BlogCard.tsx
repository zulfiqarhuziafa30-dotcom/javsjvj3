import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from './utils';

interface BlogCardProps {
  category: string;
  title: string;
  excerpt: string;
  link: string;
  isDark?: boolean;
}

export function BlogCard({ category, title, excerpt, link, isDark = true }: BlogCardProps) {
  return (
    <Link to={link} className="group block h-full">
      <article className={cn(
        "border rounded-3xl p-8 md:p-10 transition-all duration-300 shadow-sm hover:shadow-md h-full flex flex-col",
        isDark 
          ? "border-white/10 bg-zinc-900/55 backdrop-blur-xl hover:border-white/25 hover:bg-zinc-900/75 shadow-xl text-white" 
          : "bg-white border-zinc-200 hover:border-zinc-300 text-black"
      )}>
        <span className={cn(
          "text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border mb-4 inline-block w-fit",
          isDark
            ? "bg-white/10 text-zinc-200 border-white/15"
            : "bg-accent/10 text-accent border-accent/20"
        )}>
          {category}
        </span>
        <h3 className={cn(
          "text-2xl font-bold tracking-tight mb-4 transition-colors",
          isDark ? "text-white group-hover:text-zinc-200" : "text-black"
        )}>
          {title}
        </h3>
        <p className={cn(
          "text-base leading-relaxed mb-8 flex-grow",
          isDark ? "text-zinc-300" : "text-zinc-600"
        )}>
          {excerpt}
        </p>
        <span className={cn(
          "inline-flex items-center font-semibold mt-auto transition-colors",
          isDark ? "text-zinc-200 group-hover:text-white" : "text-accent group-hover:text-accent/80"
        )}>
          Read Article
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </article>
    </Link>
  );
}
