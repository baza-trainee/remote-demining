import { ReactNode } from "react";

import styles from "./CardList.module.css";

type CardListType = 2 | 3 | 4;

interface CardListProps {
  perView?: CardListType;
  items: Iterable<ReactNode>;
}

export default function CardList({ perView, items }: CardListProps) {
  return (
    <div
      className={`${styles.cardList} ${
        perView ? styles[`cols-${perView}`] : ""
      }`}
    >
      {items}
    </div>
  );
}
