import { useMediaQuery } from "react-responsive";

export const useMyMedia = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const isSDesktop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isMTablet = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobileLandscape = useMediaQuery({
    query: "(min-width: 596px)",
  });
  const isMMobile = useMediaQuery({
    query: "(min-width: 400px)",
  });
  const isMobile = useMediaQuery({
    query: "(min-width: 360px)",
  });
  const isSMobile = useMediaQuery({
    query: "(min-width: 320px)",
  });
  return {
    isMobile,
    isSMobile,
    isMMobile,
    isMobileLandscape,
    isTablet,
    isMTablet,
    isSDesktop,
    isDesktop,
  };
};
