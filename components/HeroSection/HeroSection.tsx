import { heroData } from "./heroData";
import Slider from "../Slider/Slider";
import HeroSlide from "./HeroSlide/HeroSlide";

const HeroSection = () => {
  const slides = heroData.map((item) => (
    <HeroSlide item={item} key={item.id} />
  ));

  return (
    <section id="hero">
      <Slider slidesPerPage={1} slides={slides} dots />
    </section>
  );
};

export default HeroSection;
