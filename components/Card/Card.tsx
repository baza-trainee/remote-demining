import { PropsWithChildren } from "react";
import styles from "./Card.module.css";

interface CardProps {
  img: string;
}

export default function Card({ img, children }: PropsWithChildren<CardProps>) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={img} />
      <div className={styles.body}>{children}</div>
    </div>
  );
}
