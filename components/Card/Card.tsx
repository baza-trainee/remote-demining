import { PropsWithChildren } from "react";

import styles from "./Card.module.css";

type BackgroundColors = "primary" | "light-blue";

interface CardProps {
  img: string;
  background?: BackgroundColors;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  img,
  background = "primary",
  children,
}) => {
  return (
    <div className={`${styles.card} ${styles[background]}`}>
      <img className={styles.image} src={img} /> 
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Card;
