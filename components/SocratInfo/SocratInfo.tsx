import SectionContainer from "../SectionContainer/SectionContainer";
import TextCard from "../TextCard/TextCard";

import {
  SocratChallengesData,
  socratChallengesData,
} from "./socratInfoData";

import styles from "./SocratInfo.module.css";

const SocratInfo: React.FC = () => {
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

export default SocratInfo;
