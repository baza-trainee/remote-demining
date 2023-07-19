import SectionContainer from "../SectionContainer/SectionContainer";
import projectsData from "./projectsData";
import CardList from "../CardList/CardList";
import Card from "../Card/Card";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <SectionContainer
      title="Переваги проєкту "
      description="Ми також надаємо корисні поради щодо вибору дрона, використання його можливостей та правил безпеки. Наша команда експертів завжди готова надати вам консультацію та допомогти з будь-якими питаннями, пов'язаними з дронами."
    >
      <ul className={styles.list}>
        {projectsData.map(({ id, img, title, text }) => (
          <li key={id} className={styles.card}>
            <img src={img} className={styles.image} />
            <div className={styles.body}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.text}>{text}</p>
            </div>
          </li>
        ))}
      </ul>
      {/* <CardList
        perView={3}
        items={projectsData.map((item) => (
          <Card key={item.id} img={item.img} background="light-blue">
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </Card>
        ))}
      /> */}
    </SectionContainer>
  );
};

export default Projects;
