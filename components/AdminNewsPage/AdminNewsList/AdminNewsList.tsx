"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Button from "@/components/Button/Button";
import NavLink from "@/components/NavLink/NavLink";
import { getNews, NewsItem } from "@/lib/admin/content";
import add_icon from "@/public/images/icons/buttons/add.svg";

import styles from "./AdminNewsList.module.css";

interface AdminNewsListProps {
  toggleEditing: () => void;
}

const AdminNewsList: React.FC<AdminNewsListProps> = ({ toggleEditing }) => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        const data = await getNews();
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    }

    fetchNewsData();
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {newsData.map(({ id, image, title, text, link, date }) => (
          <li key={id} className={styles.card}>
            <a href={link} target="_blank" rel="noreferrer noopener">
              <Image
                src={image}
                className={styles.image}
                alt={title}
                width={310}
                height={170}
              />
            </a>

            <div className={styles.body}>
              <div className={styles.content}>
                <a href={link} target="_blank" rel="noreferrer noopener">
                  <h3 className={styles.title}>{title}</h3>
                </a>
                <p className={styles.text}>{text}</p>
              </div>
              <div className={styles.moreInfoWrapper}>
                <NavLink href={link} isFullWidth isMoreInfo>
                  Детальніше
                </NavLink>
                <div className={styles.date}>
                  <p>{date}</p>
                </div>
              </div>
            </div>

            <div className={styles.btn_container}>
              <Button isFullWidth outlined className={styles.deleteBtn}>
                Видалити
              </Button>
            </div>
          </li>
        ))}
        <li className={styles.add_card}>
          <div className={styles.add_btn} onClick={toggleEditing}>
            <Image src={add_icon} width={50} height={51} alt={"add icon"} />
            <span>Додати</span>
          </div>
        </li>
        <li className={styles.last_card}></li>
      </ul>
    </div>
  );
};

export default AdminNewsList;
