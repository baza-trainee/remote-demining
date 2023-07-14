import styles from "./CardList.module.css";

type CardListType = 2 | 3 | 4;

interface CardListProps {
  perView?: CardListType;
  items: React.ReactNode;
}

const CardList: React.FC<CardListProps> = ({ perView, items }) => {
  return (
    <div
      className={`${styles.cardList} ${
        perView ? styles[`cols-${perView}`] : ""
      }`}
    >
      {items}
    </div>
  );
};

export default CardList;
