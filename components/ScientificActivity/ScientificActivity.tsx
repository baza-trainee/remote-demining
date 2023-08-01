import styles from "./ScientificActivity.module.css";
import ActivityListItem from "./ActivityListItem/ActivityListItem";
import activityData from "./activityData";

const ScientificActivity = () => {
  return (
    <ul className={styles.list}>
      {activityData.map((item, index) => {
        return <ActivityListItem data={item} key={index} />;
      })}
    </ul>
  );
};

export default ScientificActivity;
