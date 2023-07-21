import Image from "next/image";

import styles from "./TasksItem.module.css";

interface TasksItemProps {
  icon: string;
  text: string;
}

const TasksItem: React.FC<TasksItemProps> = ({ icon, text }) => {
  return (
    <li className={styles.card_item}>
      <div className={styles.wrapper}>
        <Image src={icon} alt="" width="40" height="40" />
        <p className={styles.text}>{text}</p>
      </div>
    </li>
  );
};

export default TasksItem;
