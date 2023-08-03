import Slider from '../Slider/Slider';

import HeroSlide from './HeroSlide/HeroSlide';
import { heroData } from './heroData';

import styles from './HeroSection.module.css';
import Container from '../Container/Container';

const HeroSection = () => {
  const slides = heroData.map((item) => (
    <HeroSlide item={item} key={item.id} />
  ));

  return (
    <section id="hero">
      <Container>
        <Slider slidesPerPage={1} slides={slides} dots />
      </Container>
    </section>
  );
};

export default HeroSection;
