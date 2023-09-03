"use client";

import { FC } from "react";
import { useWindowSize } from "usehooks-ts";

import { AdminSliderData } from "@/components/AdminSlider/AdminSlider";
import Button from "@/components/Button/Button";

import styles from "./HeroSlide.module.css";

interface HeroSlideProps {
  item: AdminSliderData;
  toggleModal: () => void;
}

const HeroSlide: FC<HeroSlideProps> = ({ item, toggleModal }) => {
  const { width } = useWindowSize();
  return (
    <div>
      <div
        className={styles["slide"]}
        style={{
          background: `lightgray url(https://remote-demining.onrender.com/images/${item.img})`,
        }}
      >
        <div className={styles.text_container}>
          <h2 className={styles["title"]}>{item.title}</h2>
          <p className={styles["caption"]}>{item.text}</p>
          <Button
            className={styles.slideBtn}
            onClick={toggleModal}
            isFullWidth={width < 768}
          >
            Підтримати
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
