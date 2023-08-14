// eslint-disable-next-line simple-import-sort/imports
import Card from "@/components/Card/Card";
import NavLink from "@/components/NavLink/NavLink";
import styles from "./NewsItem.module.css";
import Link from "next/link";

interface NewsItem {
  id: number;
  text: string;
  img: string;
  title: string;
  link: string;
}

const NewsItem: React.FC<NewsItem> = ({ id, img, text, title, link }) => {
  return (
    <div key={id} className={styles.item}>
      <Card img={img} alt={title}>
        <div className={styles.content}>
          <div className={styles.text_content}>
            <Link
              href={link}
              className={styles.title}
              target="_blank"
              rel="noreferrer noopener"
            >
              {title}
            </Link>
            <p className={styles.text}>{text}</p>
          </div>
          <div className={styles.buttonWrapper}>
            <NavLink
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              isFullWidth
              isMoreInfo
            >
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
