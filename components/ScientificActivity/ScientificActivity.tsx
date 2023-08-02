import styles from "./ScientificActivity.module.css";
import ActivityListItem from "./ActivityListItem/ActivityListItem";
import activityData from "./activityData";
import { it } from "node:test";

const ScientificActivity = () => {
  return (
    <ul className={styles.list}>
      {activityData.map((item) => (
        <ActivityListItem data={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ScientificActivity;
