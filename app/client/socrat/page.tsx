import Contact from "@/components/Contact/Contact";
import HeroSocrat from "@/components/HeroSocrat/HeroSocrat";
import SocratInfo from "@/components/SocratInfo/SocratInfo";
import bgContactsSocratPage from "@/public/images/contact/bg-cont-socrat.jpg";

import FAQ from "../../../components/FAQ/FAQ";

const SocratPage = () => {
  return (
    <div>
      <HeroSocrat />
      <SocratInfo />
      <FAQ />
      <Contact backgroundImage={bgContactsSocratPage.src} />
    </div>
  );
};

export default SocratPage;
