import { FC } from "react";
import styles from "./ActivityListItem.module.css";
import { ActivityListItemData } from "../activityData";
import Image from "next/image";

const ActivityListItem: FC<{ data: ActivityListItemData }> = ({
  data: { image, title, description },
}) => {
  return (
    <li className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={image} alt={title} />
      </div>
      <div className={styles.text}>
        <h5 className={styles.title}>{title}</h5>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default ActivityListItem;
