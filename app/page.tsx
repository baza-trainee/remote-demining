import AboutSection from "@/components/AboutSection/AboutSection";
import Button from "@/components/Button/Button";
import Projects from "@/components/Projects/Projects";
import Tasks from "@/components/Tasks/Tasks";

export default function Home() {
  return (
    <main>
      <Button>Support</Button>
      <AboutSection />
      <Tasks />
      <Projects />
    </main>
  );
}
