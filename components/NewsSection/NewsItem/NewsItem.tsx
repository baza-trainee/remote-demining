import Card from "@/components/Card/Card";
import CustomLink from "@/components/CustomLink/CustomLink";
import styles from "./NewsItem.module.css";

interface NewsItem {
  id: number;
  text: string;
  img: string;
  title: string;
}

const NewsItem: React.FC<NewsItem> = ({ id, img, text, title }) => {
  return (
    <div key={id} className={styles.item}>
      <Card img={img}>
        <div className={styles.content}>
          <div>
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{text}</p>
          </div>
          <div>
            <CustomLink href="/" isFullWidth>
              Детальніше
            </CustomLink>
            <div className={styles.date}>
              <span className={styles.decor}></span>
              <p>06 липня 2023</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NewsItem;
