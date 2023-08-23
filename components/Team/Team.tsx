"use client";
import { useEffect, useState } from "react";

import { useMyMedia } from "@/hooks/useMedia";
import teamBg from "@/public/images/team/teamBackground.png";

import SectionContainer from "../SectionContainer/SectionContainer";
import Slider from "../Slider/Slider";

import { cardsData } from "./cardsData";

const Team: React.FC = () => {
  const [perPage, setPerPage] = useState<number>(0);

  const {
    isSMobile,
    isMobile,
    isMMobile,
    isLMobile,
    isMobileLandscape,
    isTablet,
    isMTablet,
    isSDesktop,
    isDesktop,
  } = useMyMedia();

  useEffect(() => {
    isSMobile && setPerPage(1.2);
    isMobile && setPerPage(1.4);
    isMMobile && setPerPage(1.5);
    isLMobile && setPerPage(1.7);
    isMobileLandscape && setPerPage(2.3);
    isTablet && setPerPage(2.8);
    isMTablet && setPerPage(3.3);
    isSDesktop && setPerPage(3.6);
    isDesktop && setPerPage(4);
  }, [
    isSMobile,
    isMobile,
    isMMobile,
    isLMobile,
    isMobileLandscape,
    isTablet,
    isMTablet,
    isSDesktop,
    isDesktop,
  ]);

  return (
    <SectionContainer
      title="Наукова рада проєкту"
      titleColor="var(--task-text-color)"
      bgImg={teamBg.src}
      excludeMaxWidthTitle={true}
    >
      <Slider slides={cardsData} slidesPerPage={perPage} />
    </SectionContainer>
  );
};

export default Team;
