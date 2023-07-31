import { useMediaQuery } from "react-responsive";

export const useMyMedia = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(min-width: 480px)",
  });
  return { isDesktop, isTablet, isMobile };
};
