"use client";
import styles from "./Header.module.css";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import LanguageMenu from "../LanguageMenu/LanguageMenu";
import Button from "../Button/Button";
import Image from "next/image";
import { useState } from "react";
import Container from "../Container/Container";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const contentBox = `${styles.box} ${isOpenMenu ? styles.bottom_border : ""}`
  return (
    <header className={styles.header}>
      <Container>
        <div className={contentBox}>
          <HeaderLogo />
          <HeaderMenu />
          <div className={styles.box}>
            <LanguageMenu />
            <Button donateBtn={true}>Підтримати</Button>
            <button className={styles.btn_menu} onClick={toggleMenu}>
              <Image
                className={styles.burger_icon}
                src={isOpenMenu ? "/images/icons/btn_close_burger.svg" : "/images/icons/burger_menu.svg"}
                alt="burger_icon"
                width={27}
                height={30}
              ></Image>
            </button>
          </div>
        </div>
        <HeaderMenu isOpenMenu={isOpenMenu} isMobile={true} />
        <LanguageMenu isOpenMenu={isOpenMenu} isMobile={true} />
      </Container>
    </header>
  );
};

export default Header;
