import SectionContainer from "../SectionContainer/SectionContainer";
import TextCard from "../TextCard/TextCard";

import {
  SocratChallengesData,
  socratChallengesData,
} from "./socratChallengesData";

import styles from "./SocratChallenges.module.css";

const SocratChallenges: React.FC = () => {
  return (
    <SectionContainer>
      <div className={styles.container}>
        {socratChallengesData.map((el: SocratChallengesData) => {
          return <TextCard key={el.id} title={el.title} text={el.text} />;
        })}
      </div>
    </SectionContainer>
  );
};

export default SocratChallenges;
