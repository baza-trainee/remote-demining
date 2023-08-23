import SectionContainer from "../SectionContainer/SectionContainer";
import TextCard from "../TextCard/TextCard";

import { SocratChallengesData, socratChallengesData } from "./socratInfoData";

import styles from "./SocratInfo.module.css";
import Container from "../Container/Container";

const SocratInfo: React.FC = () => {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.challenges_container}>
          {socratChallengesData.map((el: SocratChallengesData) => {
            return <TextCard key={el.id} title={el.title} text={el.text} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default SocratInfo;
