import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import Contact from "@/components/Contact/Contact";
import NewsSection from "@/components/NewsSection/NewsSection";
import Partnership from "@/components/Partnership/Partnership";
import Projects from "@/components/Projects/Projects";
import Tasks from "@/components/Tasks/Tasks";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Tasks />
      <Projects />
      <Team />
      <NewsSection />
      <Partnership />
      <Contact />
    </main>
  );
}
