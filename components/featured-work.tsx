import { ArrowUpRight } from 'lucide-react';

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack solution with Next.js and Stripe",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80",
    link: "/projects"
  },
  {
    title: "AI Content Generator",
    description: "Leveraging OpenAI for content creation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    link: "/projects"
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative workspace",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    link: "/projects"
  }
];

export function FeaturedWork() {
  return (
    <section className="py-16">
      <h2 className="font-serif text-3xl mb-8">Featured <em className="italic text-neutral-400">Work</em></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-900"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
              <h3 className="font-serif text-xl mb-1 group-hover:text-neutral-200 flex items-center gap-2">
                {project.title}
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
              </h3>
              <p className="text-sm text-neutral-400">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}