"use client";

import Image from "next/image";
import { FC } from "react";
import { useWindowSize } from "usehooks-ts";

import Button from "@/components/Button/Button";

import { HeroData } from "../heroData";

import styles from "./HeroSlide.module.css";

interface HeroSlideProps {
  item: HeroData;
  toggleModal: () => void;
}

const HeroSlide: FC<HeroSlideProps> = ({ item, toggleModal }) => {
  const { width } = useWindowSize();
  return (
    <div>
      <div
        className={styles["slide"]}
        style={{
          background: `lightgray url(${item.backgroundImage}) left / cover`,
        }}
      >
        <h2 className={styles["title"]}>{item.title}</h2>
        <p className={styles["caption"]}>{item.caption}</p>
        <Button
          className={styles.slideBtn}
          onClick={toggleModal}
          isFullWidth={width < 768}
        >
          Підтримати
        </Button>
        {item.contentImage && (
          <div className={styles["imageWrapper"]}>
            <Image
              src={item.contentImage}
              alt={item.title}
              className={styles["contentImage"]}
              quality={100}
              priority
              fill
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSlide;
