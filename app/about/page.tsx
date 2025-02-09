"use client";

import { Navigation } from '@/components/navigation';
import { SocialLinks } from '@/components/social-links';
import { Code } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h1 className="font-serif text-4xl md:text-5xl leading-tight">
                About <em className="italic text-neutral-400">Me</em>
              </h1>
              <div className="space-y-4 text-neutral-400">
                <p>
                  With a passion for creating innovative solutions, I've spent years mastering modern web technologies and best practices in software development.
                </p>
                <p>
                  My expertise spans across the full stack, from crafting beautiful user interfaces to designing robust backend architectures.
                </p>
                <p>
                  I believe in writing clean, maintainable code and building applications that make a real difference in users' lives.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-neutral-900/50 rounded-lg text-center">
                  <div className="font-serif text-2xl">3+</div>
                  <div className="text-sm text-neutral-400">Years Exp.</div>
                </div>
                <div className="p-4 bg-neutral-900/50 rounded-lg text-center">
                  <div className="font-serif text-2xl">10+</div>
                  <div className="text-sm text-neutral-400">Projects</div>
                </div>
                <div className="p-4 bg-neutral-900/50 rounded-lg text-center">
                  <div className="font-serif text-2xl">100%</div>
                  <div className="text-sm text-neutral-400">Success</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-neutral-900 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80"
                  alt="Professional workspace"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-foreground text-background p-4 rounded-lg">
                <Code size={32} />
              </div>
            </div>
          </div>
        </section>
        <SocialLinks />
      </div>
    </main>
  );
}