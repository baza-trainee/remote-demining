import AboutSection from "@/components/AboutSection/AboutSection";
import Contact from "@/components/Contact/Contact";
import NewsSection from "@/components/NewsSection/NewsSection";
import Projects from "@/components/Projects/Projects";
import Tasks from "@/components/Tasks/Tasks";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <main>
      <AboutSection />
      <Tasks />
      <Projects />
      <Team />
      <NewsSection />
      <Contact />
    </main>
  );
}
