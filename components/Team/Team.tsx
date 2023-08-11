"use client";
import teamBg from "@/public/images/team/teamBackground.png";

import SectionContainer from "../SectionContainer/SectionContainer";
import Slider from "../Slider/Slider";

import { cardsData } from "./cardsData";
import useGetResponsiveObj from "./useGetResponsiveObj";

const Team: React.FC = () => {
  const responsive = useGetResponsiveObj();

  return (
    <SectionContainer
      title="Наукова рада проєкту"
      titleColor="var(--task-text-color)"
      bgImg={teamBg.src}
      centerTitle
    >
      <Slider
        slides={cardsData}
        slidesPerPage={4}
        infinite={true}
        responsive={responsive}
      />
    </SectionContainer>
  );
};

export default Team;
