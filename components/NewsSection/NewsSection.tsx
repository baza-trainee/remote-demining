"use client";
import { useEffect, useState } from "react";

import { useMyMedia } from "@/hooks/useMedia";

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
      description="Науковці НАН України є постійними учасниками конференцій і форумів в сфері високотехнологічних розробок і найсучасніших методів галузі інженерії"
    >
      <Slider
        slidesPerPage={perPage}
        slides={newsData.map((elem: News) => (
          <NewsItem key={elem.id} {...elem} />
        ))}
        dots
        infinite
        dotsPlacement="inner"
      />
    </SectionContainer>
  );
};

export default NewsSection;
