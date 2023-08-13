import Image from "next/image";

import socrat_drone from "@/public/images/socrat/socrat_drone.png";
import socrat_bg from "@/public/images/socrat/socrat-bg.jpg";

import Container from "../Container/Container";
import SocratInfo from "../SocratInfo/SocratInfo";

import styles from "./HeroSocrat.module.css";

const HeroSocrat = () => {
  return (
    <div className={styles.socrat_bg} >
      <Image src={socrat_bg} alt="socrat_bg" fill objectFit="cover" objectPosition="center"/>
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
        <SocratInfo />
      </Container>
    </div>
  );
};

export default HeroSocrat;
