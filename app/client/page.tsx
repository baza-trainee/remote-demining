import AboutSection from "@/components/AboutSection/AboutSection";
import Contact from "@/components/Contact/Contact";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsSection from "@/components/NewsSection/NewsSection";
import Partnership from "@/components/Partnership/Partnership";
import Projects from "@/components/Projects/Projects";
import Tasks from "@/components/Tasks/Tasks";
import Team from "@/components/Team/Team";
import ScrollUp from "@/components/ScrollUp/ScrollUp";
import bgContactsMainPage from "@/public/images/contact/bg-cont-socrat.jpg";

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <HeroSection />
      <AboutSection />
      <Tasks />
      <Projects />
      <Team />
      <NewsSection />
      <Partnership />
      <Contact backgroundImage={bgContactsMainPage.src} />
    </main>
  );
}
