import { FC } from "react";
import styles from "./ActivityListItem.module.css";
import { ActivityListItemData } from "../activityData";
import Image from "next/image";

const ActivityListItem: FC<{ data: ActivityListItemData }> = ({ data }) => {
  return (
    <li className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={data.image} alt={data.title} />
      </div>
      <div className={styles.text}>
        <h5 className={styles.title}>{data.title}</h5>
        <p>{data.description}</p>
      </div>
    </li>
  );
};

export default ActivityListItem;
