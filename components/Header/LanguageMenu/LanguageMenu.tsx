"use client";
import { useEffect, useRef, useState } from "react";
import { useToggle } from "usehooks-ts";

import arrow_img_src from "@/public/images/icons/header/drop_black_arrow.svg";

import { languageItems } from "./languageItems";

import styles from "./LanguageMenu.module.css";

interface LanguageItem {
  id: number;
  title: string;
  value: string;
}

interface LanguageMenuProps {
  isOpenMenu?: boolean;
  isMobile?: boolean;
}

const LanguageMenu: React.FC<LanguageMenuProps> = ({
  isOpenMenu,
  isMobile,
}: LanguageMenuProps) => {
  const [isOpenLangMenu, toggleLangMenu] = useToggle(false);
  const [selectedLang, setLang] = useState<LanguageItem>(languageItems[0]);
  const btnRef = useRef<HTMLButtonElement>(null);
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
  const arrowStyle = `${styles.arrow} ${isOpenLangMenu ? styles.rotate : ""}`;

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        btnRef.current &&
        !btnRef.current.contains(target) &&
        target.tagName !== "LI"
      ) {
        toggleLangMenu();
      }
    };

    if (isOpenLangMenu) {
      document.addEventListener("mousedown", closeMenu);
    }

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [isOpenLangMenu]);

  return (
    <div className={langMenuContainer}>
      <button className={btnLangMenu} onClick={toggleLangMenu} ref={btnRef}>
        {selectedLang.title}
        <span className={arrowStyle} style={arrowImg} />
      </button>
      <ul className={selectLangMenu}>
        {languageItems.map((item) => {
          return (
            <li
              className={styles.lang_option}
              key={item.id}
              onClick={() => {
                setLang(item);
                toggleLangMenu();
              }}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LanguageMenu;
