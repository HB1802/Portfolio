"use client";

import { Navigation } from '@/components/navigation';
import { SocialLinks } from '@/components/social-links';
import { ContactForm } from '@/components/contact-form';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
                Let's <em className="italic text-neutral-400">Connect</em>
              </h1>
              <p className="text-neutral-400 mb-8">
                Have a project in mind? I'm always open to discussing new opportunities and interesting collaborations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-neutral-900 p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-neutral-400">harshitbisht02@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-neutral-900 p-3 rounded-lg">
                    <Github size={24} />
                  </div>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-neutral-400">github.com/yourusername</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-neutral-900 p-3 rounded-lg">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-neutral-400">linkedin.com/in/yourusername</div>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </section>
        <SocialLinks />
      </div>
    </main>
  );
}