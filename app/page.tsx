import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import Tasks from "@/components/Tasks/Tasks";

export default function Home() {
  return (
    <main>
      <Tasks />
      <Projects />
      <Contact/>
    </main>
  );
}
