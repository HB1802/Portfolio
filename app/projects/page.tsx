"use client";

import { Navigation } from '@/components/navigation';
import { SocialLinks } from '@/components/social-links';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Next.js, TypeScript, and Stripe integration",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    github: "https://github.com/yourusername/project1",
    live: "https://project1.com"
  },
  {
    name: "Task Management App",
    description: "Real-time collaborative task management application with live updates",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/project2",
    live: "https://project2.com"
  },
  {
    name: "AI Content Generator",
    description: "AI-powered content generation tool using OpenAI's GPT-3 API",
    tech: ["Python", "FastAPI", "React", "OpenAI"],
    github: "https://github.com/yourusername/project3",
    live: "https://project3.com"
  }
];

export default function Projects() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <section className="py-16">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4">
              Featured <em className="italic text-neutral-400">Projects</em>
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              A selection of my recent work, showcasing my expertise in full-stack development and problem-solving.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.name} className="bg-neutral-900/50 rounded-lg p-8 hover:bg-neutral-900 transition-colors">
                <h3 className="font-serif text-2xl mb-3">{project.name}</h3>
                <p className="text-neutral-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-neutral-800 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-neutral-400 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-neutral-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <SocialLinks />
      </div>
    </main>
  );
}