import { PropsWithChildren } from "react";
import styles from "./Card.module.css";

type BackgroundColors = "primary" | "light-blue";

interface CardProps {
  img: string;
  background?: BackgroundColors;
}

export default function Card({
  img,
  background = "primary",
  children,
}: PropsWithChildren<CardProps>) {
  return (
    <div className={`${styles.card} ${styles[background]}`}>
      <img className={styles.image} src={img} />
      <div className={styles.body}>{children}</div>
    </div>
  );
}
