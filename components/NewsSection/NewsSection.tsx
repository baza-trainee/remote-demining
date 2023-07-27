"use client";
import { useMyMedia } from "@/hooks/useMedia";
import { useEffect, useState } from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import Slider from "../Slider/Slider";
import NewsItem from "./NewsItem/NewsItem";
import newsData, { News } from "./newsData";

const NewsSection: React.FC = () => {
  const [perPage, setPerPage] = useState<number>(1);
  const { isMobile, isTablet, isDesktop } = useMyMedia();
  useEffect(() => {
    isMobile && setPerPage(1);
    isTablet && setPerPage(2);
    isDesktop && setPerPage(3);
  }, [isMobile, isTablet, isDesktop]);

  return (
    <SectionContainer
      title="Наші новини"
      description="Ми також надаємо корисні поради щодо вибору дрона, використання його можливостей та правил безпеки. Наша команда експертів завжди готова надати вам консультацію та допомогти з будь-якими питаннями, пов'язаними з дронами."
    >
      <Slider
        slidesPerPage={perPage}
        slides={newsData.map((elem: News) => (
          <NewsItem {...elem} />
        ))}
        dots
        infinite
        dotsPlacement="inner"
      />
    </SectionContainer>
  );
};

export default NewsSection;
