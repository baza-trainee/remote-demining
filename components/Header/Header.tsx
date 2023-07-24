"use client";
import Image from "next/image";
import { useState } from "react";

import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import LanguageMenu from "../LanguageMenu/LanguageMenu";
import Button from "../Button/Button";
import Container from "../Container/Container";

import styles from "./Header.module.css";

import burger_menu from '@/public/images/icons/burger_menu.svg';
import btn_close_burger from '@/public/images/icons/btn_close_burger.svg';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const contentBox = `${styles.box} ${isOpenMenu ? styles.bottom_border : ""}`;
  return (
    <header className={styles.header}>
      <Container>
        <div className={contentBox}>
          <HeaderLogo />
          <HeaderMenu />
          <div className={styles.box}>
            <LanguageMenu />
            <Button donateBtn>Підтримати</Button>
            <button className={styles.btn_menu} onClick={toggleMenu}>
              <Image
                className={styles.burger_icon}
                src={
                  isOpenMenu
                    ? btn_close_burger
                    : burger_menu
                }
                alt="burger_icon"
                width={27}
                height={30}
              ></Image>
            </button>
          </div>
        </div>
        <HeaderMenu isOpenMenu={isOpenMenu} isMobile />
        <LanguageMenu isOpenMenu={isOpenMenu} isMobile />
      </Container>
    </header>
  );
};

export default Header;
