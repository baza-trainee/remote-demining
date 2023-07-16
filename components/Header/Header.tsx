'use client'
import styles from "./Header.module.css";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import LanguageMenu from "../LanguageMenu/LanguageMenu";
import Button from "../Button/Button";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderLogo />
        <HeaderMenu isOpenMenu={isOpenMenu} />
        <div className={styles.btn_container}>
          <LanguageMenu isOpenMenu={isOpenMenu} />
          <Button donateBtn={true}>Підтримати</Button>
          <button className={styles.btn_menu} onClick={toggleMenu}>
            <Image
              className={styles.burger_icon}
              src={"/image/icons/burger_menu.svg"}
              alt="burger_icon"
              width={30}
              height={30}
            ></Image>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
