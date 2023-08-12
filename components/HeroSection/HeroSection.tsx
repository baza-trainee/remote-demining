import Slider from '../Slider/Slider';

import HeroSlide from './HeroSlide/HeroSlide';
import { heroData } from './heroData';

import styles from './HeroSection.module.css';

const HeroSection = () => {
  const slides = heroData.map((item) => (
    <HeroSlide item={item} key={item.id} />
  ));

  return (
    <section id="hero" className={styles.container}>
        <Slider slidesPerPage={1} slides={slides} dots />
    </section>
  );
};

export default HeroSection;
