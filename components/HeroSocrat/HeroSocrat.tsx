import CardList from "../CardList/CardList";
import SectionContainer from "../SectionContainer/SectionContainer";
import HeroSocratItems from "./HeroSoctatItems/HeroSocratItems";
import socrat_drone from "@/public/images/socrat/socrat_drone.png";
import { SocratData, heroSocratData } from "./heroSocratData";

import styles from "./HeroSocrat.module.css";
import Image from "next/image";

const HeroSocrat = () => {
  return (
    <SectionContainer centerTitle title="Проект SOCRAT">
      <h3 className={styles.sub_title}>
        Дистанційне знаходження вибухонебезпечних предметів
      </h3>
      <div className={styles.img_container}>
        <Image className={styles.img_cover} src={socrat_drone} fill alt="Socrat Drone" />
      </div>
      <div className={styles.container}>
        <CardList
          perView={3}
          items={heroSocratData.map((el: SocratData) => {
            return <HeroSocratItems {...el} />;
          })}
        ></CardList>
      </div>
    </SectionContainer>
  );
};

export default HeroSocrat;
