"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useMyMedia } from "@/hooks/useMedia";
import { getNews } from "@/lib/admin/content";

import { AdminNewsValues } from "../AdminNewsPage/AdminNewsPage";
import SectionContainer from "../SectionContainer/SectionContainer";
import Slider from "../Slider/Slider";

import NewsItem from "./NewsItem/NewsItem";

const NewsSection: React.FC = () => {
  const [perPage, setPerPage] = useState<number>(1);
  const { isMobile, isTablet, isDesktop } = useMyMedia();
  const [newsData, setNewsData] = useState<AdminNewsValues[]>();

  const fetchNewsData = async () => {
    try {
      const data = await getNews();
      const newsData = data?.map((news): AdminNewsValues => {
        return {
          id: news._id,
          image: news.images[0],
          title: news.data.title,
          img_description: news.data.img_description,
          text: news.data.text,
          link: news.data.link,
          date: news.data.date,
        };
      });
      setNewsData(newsData);
    } catch (e) {
      console.error(e);
      toast.error("Упс..., щось пішло не так!", {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  useEffect(() => {
    isMobile && setPerPage(1);
    isTablet && setPerPage(2);
    isDesktop && setPerPage(3);
    fetchNewsData();
  }, [isMobile, isTablet, isDesktop]);

  return (
    <>
      {newsData && (
        <SectionContainer
          titleMargin
          title="Наші новини"
          description="Науковці НАН України є постійними учасниками конференцій і форумів в сфері високотехнологічних розробок і найсучасніших методів галузі інженерії"
        >
          <Slider
            slidesPerPage={perPage}
            slides={newsData?.map((elem) => (
              <NewsItem key={elem.id} {...elem} />
            ))}
          />
        </SectionContainer>
      )}
    </>
  );
};

export default NewsSection;
