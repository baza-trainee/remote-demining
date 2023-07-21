import tasksData from "./tasksData";
import SectionContainer from "../SectionContainer/SectionContainer";
import TasksList from "./TasksList/TasksList";

import bg from "@/public/images/tasks/task-bg.jpg";

const Tasks: React.FC = () => {
  return (
    <SectionContainer
      title="Основні завдання"
      bgImg={bg.src}
      titleColor="var(--task-text-color)"
      centerTitle
    >
      <TasksList items={tasksData} />
    </SectionContainer>
  );
};

export default Tasks;
