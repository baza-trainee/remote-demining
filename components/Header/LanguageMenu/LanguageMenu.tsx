"use client";
import { useState } from "react";

import arrow_img_src from "@/public/images/icons/header/drop_black_arrow.svg";

import { languageItems } from "./languageItems";

import styles from "./LanguageMenu.module.css";


interface LanguageMenuProps {
  isOpenMenu?: boolean;
  isMobile?: boolean;
}

const LanguageMenu: React.FC<LanguageMenuProps> = ({
  isOpenMenu,
  isMobile,
}: LanguageMenuProps) => {
  const [isOpenLangMenu, setOpenLangMenu] = useState(false);
  const toggleLangMenu = () => {
    setOpenLangMenu(!isOpenLangMenu);
  };
  const selectLangMenu = `${styles.lang_select} ${
    isOpenLangMenu ? styles.show_menu : ""
  }`;
  const btnLangMenu = `${styles.btn_lang_menu} ${
    isOpenMenu ? styles.show_menu : ""
  }`;
  const langMenuContainer = `${styles.lang_menu_container} ${
    isMobile ? styles.mobile : ""
  }`;
  const arrowImg = { backgroundImage: `url(${arrow_img_src.src})` };
  const arrowStyle =`${styles.arrow} ${isOpenLangMenu ? styles.rotate : ""}`

  return (
    <div className={langMenuContainer}>
      <button className={btnLangMenu} onClick={toggleLangMenu}>
        {languageItems[0].title}
        <span className={arrowStyle} style={arrowImg} />
      </button>
      <ul className={selectLangMenu}>
        {languageItems.map(({ id, title }) => {
          return (
            <li className={styles.lang_option} key={id}>
              {title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LanguageMenu;
