"use client";
import { usePathname } from "next/navigation";

import styles from "./HeaderLayoutBox.module.css";
const HeaderLayoutBox = () => {
  const pathname = usePathname();
  return !pathname.includes("admin") && <div className={styles.box} id="top" />;
};

export default HeaderLayoutBox;
