import SectionContainer from "@/components/SectionContainer/SectionContainer";
import ScientificActivity from "@/components/ScientificActivity/ScientificActivity";
import ScrollUp from "@/components/ScrollUp/ScrollUp";

const Activity = () => {
  return (
    <main>
      <ScrollUp />
      <SectionContainer
        title="Наукова діяльність"
        description="Ми також надаємо корисні поради щодо вибору дрона, використання його можливостей та правил безпеки. Наша команда експертів завжди готова надати вам консультацію та допомогти з будь-якими питаннями, пов'язаними з дронами."
      >
        <ScientificActivity />
      </SectionContainer>
    </main>
  );
};

export default Activity;
