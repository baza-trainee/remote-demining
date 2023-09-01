import Image from "next/image";

import styles from "./Card.module.css";

type BackgroundColors = "primary" | "light-blue";

interface CardProps {
  img: string;
  alt?: string;
  background?: BackgroundColors;
  children?: React.ReactNode;
  imageContainerStyles?: string;
}

const Card: React.FC<CardProps> = ({
  img,
  alt = "",
  background = "primary",
  children,
  imageContainerStyles,
}) => {
  return (
    <div className={`${styles.card} ${styles[background]}`}>
      <div className={`${imageContainerStyles || ""} ${styles.imageContainer}`}>
        <Image className={styles.image} src={img} alt={alt} fill sizes="100%" />
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Card;
