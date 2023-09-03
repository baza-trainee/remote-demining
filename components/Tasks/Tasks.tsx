import bg from "@/public/images/tasks/task-bg.jpg";

import SectionContainer from "../SectionContainer/SectionContainer";

import TasksList from "./TasksList/TasksList";
import tasksData from "./tasksData";

import styles from "./Tasks.module.css";

const Tasks: React.FC = () => {
  return (
    <SectionContainer
      title="Основні завдання"
      bgImg={bg.src}
      titleColor="var(--task-text-color)"
      centerTitle
      alignTitle="center"
      className={styles.section}
    >
      <TasksList items={tasksData} />
    </SectionContainer>
  );
};

export default Tasks;
