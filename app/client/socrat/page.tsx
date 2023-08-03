import Contact from "@/components/Contact/Contact"
import HeroSocrat from "@/components/HeroSocrat/HeroSocrat"
import SocratInfo from "@/components/SocratInfo/SocratInfo"
import WhatWeOffer from "@/components/WhatWeOffer/WhatWeOffer"
import bgContactsSocratPage from '@/public/images/contact/bg-cont-socrat.jpg'
 
const SocratPage = () => {
  return (
    <div>
      <HeroSocrat />
      <SocratInfo />
      <WhatWeOffer />
      <Contact backgroundImage={bgContactsSocratPage.src} />
    </div>
  )
}

export default SocratPage