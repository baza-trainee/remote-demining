"use client"
import { useToggle } from 'usehooks-ts';

import Donate from '../Donate/Donate';
import Modal from '../Modal/Modal';
import Slider from '../Slider/Slider';

import HeroSlide from './HeroSlide/HeroSlide';
import { heroData } from './heroData';

import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const slides = heroData.map((item) => (
    <HeroSlide item={item} key={item.id} toggleModal={toggleModal} />
  ));

  return (
    <section id="hero" className={styles.container}>
        <Slider slidesPerPage={1} slides={slides} dots />
        {isModalOpen && (
              <Modal isBigModal toggleModal={toggleModal} isModalOpen={isModalOpen}  >
                <Donate/>
              </Modal>
            )}
    </section>
  );
};

export default HeroSection;
