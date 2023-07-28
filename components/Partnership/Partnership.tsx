"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useMyMedia } from "@/hooks/useMedia";

import SectionContainer from "../SectionContainer/SectionContainer";
import Slider from "../Slider/Slider";

import partnersData, { Partner } from "./partnersData";

const Partnership = () => {
  const [perPage, setPerPage] = useState<number>(1);
  const { isMobile, isTablet, isDesktop } = useMyMedia();
  useEffect(() => {
    isMobile && setPerPage(1.5);
    isTablet && setPerPage(3);
    isDesktop && setPerPage(5.5);
  }, [isMobile, isTablet, isDesktop]);

  return (
    <SectionContainer
      title="Партнерські організації"
      description="Організації, з якими ми постійно співпрацюємо"
    >
      <Slider
        slidesPerPage={perPage}
        slides={partnersData.map((el: Partner) => (
          <div key={el.id}>
            <Image src={el.img} alt="partner" width={213} height={140} />
          </div>
        ))}
        infinite
      />
    </SectionContainer>
  );
};

export default Partnership;
