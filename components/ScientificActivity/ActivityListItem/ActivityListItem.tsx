import Image from "next/image";
import { FC } from "react";

import { ActivityListItemData } from "../activityData";

import styles from "./ActivityListItem.module.css";

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
