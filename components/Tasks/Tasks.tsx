import tasksData from "./tasksData";
import TasksList from "./TasksList/TasksList";
import SectionContainer from "../SectionContainer/SectionContainer";

const Tasks: React.FC = () => {
  return (
    <SectionContainer
      title="Основні завдання"
      bgImg="/images/tasks/task-bg.jpg"
      titleColor="var(--task-text-color)"
      centerTitle
    >
      <TasksList items={tasksData} />
    </SectionContainer>
  );
};

export default Tasks;
