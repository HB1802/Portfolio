import { Code2, Layout, Database, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, modern web applications with React and Next.js',
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: 'Backend Development',
    description: 'Creating robust APIs and server-side solutions',
    icon: <Database className="w-6 h-6" />
  },
  {
    title: 'Full Stack Solutions',
    description: 'End-to-end application development with modern technologies',
    icon: <Code2 className="w-6 h-6" />
  },
  {
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed and efficiency',
    icon: <Sparkles className="w-6 h-6" />
  }
];

export function ServicesGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16">
      {services.map((service) => (
        <div
          key={service.title}
          className="group relative p-6 bg-neutral-900/50 rounded-lg hover:bg-neutral-900 transition-colors"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              {service.icon}
              <h3 className="font-serif text-xl">{service.title}</h3>
            </div>
          </div>
          <p className="mt-4 text-sm text-neutral-400">{service.description}</p>
        </div>
      ))}
    </section>
  );
}