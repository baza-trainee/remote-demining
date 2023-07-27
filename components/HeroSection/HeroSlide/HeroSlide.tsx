import styles from "./HeroSlide.module.css";
import { FC } from "react";
import { HeroData } from "../heroData";
import Image from "next/image";
import Button from "@/components/Button/Button";

const HeroSlide: FC<{ item: HeroData }> = ({ item }) => {
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
          supportBtn
          id="slideBtn"
          className={styles.slideBtn}
          isFullWidth
        >
          Підтримати
        </Button>
        {item.contentImage && (
          <Image
            src={item.contentImage}
            alt={item.title}
            className={styles["contentImage"]}
            width={0}
            height={0}
          />
        )}
      </div>
    </div>
  );
};

export default HeroSlide;
