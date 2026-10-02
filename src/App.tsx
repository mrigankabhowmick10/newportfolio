import { useTheme } from '@/hooks/useTheme';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AchievementStats from '@/components/AchievementStats';
import About from '@/components/About';
import Skills from '@/components/Skills';
import FeaturedProject from '@/components/FeaturedProject';
import ProjectsGrid from '@/components/ProjectsGrid';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Leadership from '@/components/Leadership';
import Entrepreneurship from '@/components/Entrepreneurship';
import Timeline from '@/components/Timeline';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';
import ResumeCTA from '@/components/ResumeCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import CustomCursor from '@/components/CustomCursor';

function App() {
  const { theme, toggle } = useTheme();
  useScrollReveal();

  return (
    <div className="min-h-screen bg-ink-950 dark:bg-ink-950 light:bg-slate-50 noise-overlay">
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero />
        <AchievementStats />
        <About />
        <Skills />
        <FeaturedProject />
        <ProjectsGrid />
        <Achievements />
        <Certifications />
        <Leadership />
        <Entrepreneurship />
        <Timeline />
        <WhyWorkWithMe />
        <ResumeCTA />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
