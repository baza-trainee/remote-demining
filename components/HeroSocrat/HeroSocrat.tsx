import Image from "next/image";

import socrat_drone from "@/public/images/socrat/socrat_drone.png";

import Container from "../Container/Container";

import styles from "./HeroSocrat.module.css";

const HeroSocrat = () => {
  return (
    <Container>
      <div className={styles.container}>
        <h2 className={styles.title}>Проєкт SOCRAT</h2>
        <h3 className={styles.sub_title}>
          Дистанційне знаходження вибухонебезпечних предметів
        </h3>
        <div className={styles.img_container}>
          <Image
            className={styles.img_cover}
            src={socrat_drone}
            sizes="(max-width: 768px) 100vh, 700px"
            fill
            alt="Socrat Drone"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSocrat;
