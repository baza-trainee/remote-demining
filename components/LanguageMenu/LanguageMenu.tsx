"use client";
import { useState } from "react";
import styles from "./LanguageMenu.module.css";

interface LanguageMenuProps {
  isOpenMenu?: boolean;
}

const languageItems = [
  {
    id: 0,
    title: "UA",
    value: "ua",
  },
  {
    id: 1,
    title: "EN",
    value: "en",
  },
  {
    id: 2,
    title: "FR",
    value: "fr",
  },
  {
    id: 3,
    title: "DE",
    value: "de",
  },
];

const LanguageMenu: React.FC<LanguageMenuProps> = ({
  isOpenMenu,
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

  return (
    <div className={styles.lang_menu_container}>
      <button className={btnLangMenu} onClick={toggleLangMenu}>
        {languageItems[0].title}
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
