"use client";

import { useLayoutEffect, useEffect } from "react";

const ScrollUp = () => {
  useLayoutEffect(() => {
    console.log("scrolling");
    document.body.scrollTo(0, 0);
  }, []);
  return null;
};

export default ScrollUp;
