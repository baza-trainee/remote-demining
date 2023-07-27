import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import Projects from "@/components/Projects/Projects";
import Tasks from "@/components/Tasks/Tasks";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Tasks />
      <Projects />
    </main>
  );
}
