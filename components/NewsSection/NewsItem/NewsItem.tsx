// eslint-disable-next-line simple-import-sort/imports
import Card from "@/components/Card/Card";
import NavLink from "@/components/NavLink/NavLink";
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
          <div className={styles.text_content} >
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{text}</p>
          </div>
          <div className={styles.buttonWrapper}>
            <NavLink href="/" isFullWidth isMoreInfo>
              Детальніше
            </NavLink>
            <div className={styles.date}>
              <p>06 липня 2023</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NewsItem;
