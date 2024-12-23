"use client";

import Link from 'next/link';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/about', label: 'ABOUT' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/blogs', label: 'BLOGS' },
  { href: '/contact', label: 'CONTACT' },
];

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-serif text-xl tracking-wider">
            HARSHIT
          </Link>
          <div className="hidden sm:block">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm tracking-widest hover:text-neutral-400 transition-colors"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}