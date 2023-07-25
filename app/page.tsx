import AboutSection from "@/components/AboutSection/AboutSection";
import Partnership from "@/components/Partnership/Partnership";
import Projects from "@/components/Projects/Projects";
import Tasks from "@/components/Tasks/Tasks";

export default function Home() {
  return (
    <main>
      <AboutSection />
      <Tasks />
      <Projects />
      <Partnership />
    </main>
  );
}
