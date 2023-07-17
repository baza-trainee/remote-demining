import TasksItem from "../TasksItem/TasksItem";
import styles from "./TasksList.module.css";

interface TasksListProps {
  items: {
    id: number;
    icon: string;
    text: string;
  }[];
}

const TasksList: React.FC<TasksListProps> = ({ items }) => {
  return (
    <ul className={styles.wrapper}>
      {items.map((item) => (
        <TasksItem key={item.id} icon={item.icon} text={item.text} />
      ))}
    </ul>
  );
};

export default TasksList;
