import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import AchievementsSection from '@/components/AchievementsSection';
import TechStackSection from '@/components/TechStackSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <AchievementsSection />
      <TechStackSection />
      <Footer />
    </main>
  );
};

export default Index;
