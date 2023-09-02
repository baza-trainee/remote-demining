import React, { CSSProperties } from "react";

import styles from "./container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  style?: string;
}

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return <div className={`${styles.container} ${style || ""}`}>{children}</div>;
};

export default Container;
