import SectionContainer from "@/components/SectionContainer/SectionContainer";
import ScientificActivity from "@/components/ScientificActivity/ScientificActivity";

const Activity = () => {
  return (
    <main>
      <SectionContainer
        title="Наукова діяльність"
        alignTitle="left"
        description="Ми також надаємо корисні поради щодо вибору дрона, використання його можливостей та правил безпеки. Наша команда експертів завжди готова надати вам консультацію та допомогти з будь-якими питаннями, пов'язаними з дронами."
      >
        <ScientificActivity />
      </SectionContainer>
    </main>
  );
};

export default Activity;
