import AboutSection from "@/components/AboutSection/AboutSection";
import Projects from "@/components/Projects/Projects";
import SocratChallenges from "@/components/SocratChallenges/SocratChallenges";
import Tasks from "@/components/Tasks/Tasks";

export default function Home() {
  return (
    <main>
      <AboutSection />
      <Tasks />
      <Projects />
      <SocratChallenges />
    </main>
  );
}
