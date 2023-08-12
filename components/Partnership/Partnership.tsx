"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useMyMedia } from "@/hooks/useMedia";

import SectionContainer from "../SectionContainer/SectionContainer";
import Slider from "../Slider/Slider";

import partnersData, { Partner } from "./partnersData";

import styles from "./Parnership.module.css";

const Partnership = () => {
  const [perPage, setPerPage] = useState<number>(0);
  const {
    isSMobile,
    isMobile,
    isMMobile,
    isMobileLandscape,
    isTablet,
    isMTablet,
    isSDesktop,
    isDesktop,
  } = useMyMedia();
  useEffect(() => {
    isSMobile && setPerPage(1.2);
    isMobile && setPerPage(1.5);
    isMMobile && setPerPage(1.7);
    isMobileLandscape && setPerPage(2.5);
    isTablet && setPerPage(3);
    isMTablet && setPerPage(3.3);
    isSDesktop && setPerPage(4);
    isDesktop && setPerPage(5.5);
  }, [
    isSMobile,
    isMobile,
    isMMobile,
    isMobileLandscape,
    isTablet,
    isMTablet,
    isSDesktop,
    isDesktop,
  ]);

  return (
    <SectionContainer
      title="Партнерські організації"
      description="Організації, з якими ми постійно співпрацюємо"
      className={styles.section}
    >
      <Slider
        slidesPerPage={perPage}
        slides={partnersData.map((el: Partner) => (
          <div key={el.id}>
            <Image src={el.img} alt="partner" width={213} height={140} />
          </div>
        ))}
        infinite={false}
      />
    </SectionContainer>
  );
};

export default Partnership;
