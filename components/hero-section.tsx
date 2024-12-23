import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
      <div className="space-y-6">
        <h1 className="font-serif text-4xl md:text-6xl leading-tight">
          Building digital <em className="italic text-neutral-400">experiences</em> that matter
        </h1>
        <p className="text-neutral-400 max-w-md">
          Full-stack developer crafting modern web applications with a focus on performance, scalability, and user experience.
        </p>
      </div>
      <div className="relative">
        <div className="aspect-[3/4] bg-neutral-900 rounded-lg overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/80 via-neutral-900/20 to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
            alt="Modern development workspace"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2 bg-neutral-900/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Code2 size={16} className="text-neutral-400" />
                <span>Full Stack Development</span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-tr from-neutral-500/20 to-neutral-500/0 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-neutral-500/20 to-neutral-500/0 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
}