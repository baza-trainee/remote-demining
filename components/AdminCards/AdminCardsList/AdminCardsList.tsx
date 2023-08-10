"use client";
import Image from "next/image";

import Button from "@/components/Button/Button";
import projectsData from "@/components/Projects/projectsData";
import add_icon from "@/public/images/icons/buttons/add.svg";

import styles from "./AdminCardsList.module.css";

const AdminCardsContainer = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {projectsData.map(({ id, img, title, text }) => (
          <li key={id} className={styles.card}>
            <Image src={img} className={styles.image} alt={title} />
            <div className={styles.body}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.text}>{text}</p>
            </div>
            <div className={styles.btn_container}>
              <Button isFullWidth outlined>
                Видалити
              </Button>
            </div>
          </li>
        ))}
        <li className={styles.add_card}>
          <div className={styles.add_btn}>
            <Image src={add_icon} width={50} height={51} alt={"add icon"} />
            <span>Додати</span>
          </div>
        </li>
        <li className={styles.last_card}>
        </li>
      </ul>
    </div>
  );
};

export default AdminCardsContainer;
