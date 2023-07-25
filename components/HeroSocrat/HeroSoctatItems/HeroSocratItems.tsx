import Card from "@/components/Card/Card";
import styles from "./HeroSocratItems.module.css";

interface HeroSocratItems {
  id: number;
  title: string;
  text: string;
}

const HeroSocratItems: React.FC<HeroSocratItems> = ({ id, title, text }) => {
  return (
    <div key={id} className={styles.item}>
      <Card>
        <h2>{title}</h2>
        <p>{text}</p>
      </Card>
    </div>
  );
};

export default HeroSocratItems;
