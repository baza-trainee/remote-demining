
import Contact from '@/components/Contact/Contact';
import FAQ from '@/components/FAQ/FAQ';
import HeroSocrat from '@/components/HeroSocrat/HeroSocrat';
import bgContactsSocratPage from '@/public/images/contact/bg-cont-socrat.jpg';



const SocratPage = () => {
  return (
    <div>
      <HeroSocrat />
      <FAQ />
      <Contact backgroundImage={bgContactsSocratPage.src} />
    </div>
  );
};

export default SocratPage;
