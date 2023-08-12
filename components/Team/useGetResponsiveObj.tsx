"use client";
import { ResponsiveObject } from "react-slick";
import { useWindowSize } from "usehooks-ts";

const useGetResponsiveObj = (): ResponsiveObject[] => {
  const { width } = useWindowSize();

  const responsive: ResponsiveObject[] = [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: width / 328,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: width / 290,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: width / 268,
      },
    },
    {
      breakpoint: 596,
      settings: {
        slidesToShow: width / 296,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        // variableWidth: true,
        // adaptiveHeight: true,
      },
    },
  ];

  return responsive;
};

export default useGetResponsiveObj;
