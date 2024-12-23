"use client";

import { Navigation } from '@/components/navigation';
import { SocialLinks } from '@/components/social-links';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

const blogs = [
  {
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "Learn how to leverage Next.js features to build performant and scalable web applications.",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    category: "Development"
  },
  {
    title: "The Future of AI in Web Development",
    excerpt: "Exploring how artificial intelligence is reshaping the landscape of web development.",
    date: "2024-03-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    category: "AI & Tech"
  },
  {
    title: "Optimizing React Performance",
    excerpt: "Essential techniques and best practices for building high-performance React applications.",
    date: "2024-03-05",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80",
    category: "React"
  }
];

export default function Blogs() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <section className="py-16">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4">
              Latest <em className="italic text-neutral-400">Insights</em>
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Thoughts, learnings, and perspectives on modern web development, technology, and design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article 
                key={blog.title} 
                className="group bg-neutral-900/50 rounded-lg overflow-hidden hover:bg-neutral-900 transition-colors"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-neutral-400 mb-4">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(blog.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={14} />
                      {blog.readTime}
                    </span>
                  </div>
                  <span className="text-xs px-3 py-1 bg-neutral-800 rounded-full">
                    {blog.category}
                  </span>
                  <h2 className="font-serif text-xl mt-4 mb-2 group-hover:text-neutral-200">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-neutral-400 mb-4">
                    {blog.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm hover:text-neutral-400 transition-colors"
                  >
                    Read More
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <SocialLinks />
      </div>
    </main>
  );
}