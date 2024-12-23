import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ServicesGrid } from '@/components/services-grid';
import { FeaturedWork } from '@/components/featured-work';
import { SocialLinks } from '@/components/social-links';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <HeroSection />
        <ServicesGrid />
        <FeaturedWork />
        <SocialLinks />
      </div>
    </main>
  );
}