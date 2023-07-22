import SectionContainer from "../SectionContainer/SectionContainer";

import AboutSectionList from "./AboutSectionList/AboutSectionList";
import aboutData from "./aboutData";

const AboutSection: React.FC = () => {
  return (
    <SectionContainer>
      <AboutSectionList items={aboutData} />
    </SectionContainer>
  );
};

export default AboutSection;
