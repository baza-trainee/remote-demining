import AboutSection from "@/components/AboutSection/AboutSection";
import Contact from "@/components/Contact/Contact";
import Modal from "@/components/Modal/Modal";
import NewsSection from "@/components/NewsSection/NewsSection";
import Partnership from "@/components/Partnership/Partnership";
import Projects from "@/components/Projects/Projects";
import Tasks from "@/components/Tasks/Tasks";
import Team from "@/components/Team/Team";

export default function Client() {
  return (
    <main>
      <Modal isActive={true} />
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
