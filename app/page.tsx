import Contact from "@/components/Contact/Contact";
import AboutSection from "@/components/AboutSection/AboutSection";
import NewsSection from "@/components/NewsSection/NewsSection";
import Projects from "@/components/Projects/Projects";
import Tasks from "@/components/Tasks/Tasks";

export default function Home() {
  return (
    <main>
      <AboutSection />
      <Tasks />
      <Projects />
      <NewsSection />
      <Contact/>
    </main>
  );
}
