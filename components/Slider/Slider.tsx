"use client";

import SlickSlider, { ResponsiveObject, Settings } from "react-slick";

import Arrow from "./Arrow/Arrow";

import styles from "./Slider.module.css";

interface SliderProps {
  slidesPerPage: number;
  slides: React.ReactNode[];
  infinite?: boolean;
  dots?: boolean;
  dotsPlacement?: "inner" | "outer";
  responsive?: ResponsiveObject[];
}

const Slider: React.FC<SliderProps> = ({
  slidesPerPage,
  slides,
  infinite,
  dots,
  dotsPlacement = "inner",
  responsive,
}) => {
  const sliderSettings: Settings = {
    slidesToShow: slidesPerPage < slides.length ? slidesPerPage : slides.length,
    autoplay: false,
    focusOnSelect: false,
    nextArrow: <Arrow arrowType="next" />,
    prevArrow: <Arrow arrowType="prev" />,
    arrows: true,
    appendDots: (dots) => (
      <ul style={{ bottom: dotsPlacement === "outer" ? -16 : 16 }}>{dots}</ul>
    ),
    customPaging: (i) => <button></button>,
    dotsClass: styles["dots"],
    infinite,
    dots,
    responsive,
  };

  return (
    <SlickSlider
      className={styles[`slider${slidesPerPage === 1 ? "-full" : ""}`]}
      {...sliderSettings}
    >
      {slides}
    </SlickSlider>
  );
};

export default Slider;
