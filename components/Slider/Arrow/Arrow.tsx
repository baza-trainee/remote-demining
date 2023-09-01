import { CustomArrowProps } from "react-slick";

import styles from "./Arrow.module.css";

interface ArrowProps extends CustomArrowProps {
  arrowType: "next" | "prev";
  infinite?: boolean;
  slidesPerPage: number;
}

const Arrow: React.FC<ArrowProps> = ({
  arrowType,
  className,
  style,
  currentSlide,
  slideCount,
  infinite,
  slidesPerPage,
  ...props
}) => {
  const isDisabled =
    !infinite &&
    (arrowType === "next"
      ? currentSlide === (slideCount as number) - slidesPerPage
      : currentSlide === 0);
  return (
    <button
      className={styles[arrowType === "next" ? "arrow-next" : "arrow-prev"]}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label={arrowType === "next" ? "arrow-next" : "arrow-prev"}
      type="button"
      {...props}
    >
      {arrowType === "next" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.75 11.9999C16.751 12.199 16.6717 12.39 16.53 12.5299L8.53003 20.5299C8.23452 20.8053 7.77402 20.7971 7.48841 20.5115C7.2028 20.2259 7.19467 19.7654 7.47003 19.4699L14.94 11.9999L7.47003 4.52991C7.19467 4.2344 7.2028 3.7739 7.48841 3.48829C7.77402 3.20267 8.23452 3.19455 8.53003 3.46991L16.53 11.4699C16.6717 11.6098 16.751 11.8008 16.75 11.9999Z"
            fill="#F5F5F5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.7586 4.00943C16.7595 4.2085 16.6802 4.39955 16.5386 4.53943L9.06856 12.0094L16.5386 19.4794C16.8139 19.7749 16.8058 20.2354 16.5202 20.5211C16.2346 20.8067 15.7741 20.8148 15.4786 20.5394L7.47856 12.5394C7.1861 12.2466 7.1861 11.7722 7.47856 11.4794L15.4786 3.47943C15.7714 3.18698 16.2457 3.18698 16.5386 3.47943C16.6802 3.61931 16.7595 3.81036 16.7586 4.00943Z"
            fill="#F5F5F5"
          />
        </svg>
      )}
    </button>
  );
};

export default Arrow;
