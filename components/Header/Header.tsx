import React from "react";
import styles from "./Header.module.css";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import Language from "../Language/Language";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderLogo />
        <HeaderMenu />
        <Language />
        <button className={styles.btn}>Підтримати</button>
      </div>
    </header>
  );
}

export default Header
