import { PropsWithChildren } from "react";

import styles from "./CardList.module.css";

type CardListType = 2 | 3 | 4;

interface CardListProps {
  perView?: CardListType;
}

export default function CardList({
  perView,
  children,
}: PropsWithChildren<CardListProps>) {
  return (
    <div
      className={`${styles.cardList} ${
        perView ? styles[`cols-${perView}`] : ""
      }`}
    >
      {children}
    </div>
  );
}
