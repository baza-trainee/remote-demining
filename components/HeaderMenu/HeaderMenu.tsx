import Link from "next/link";
import React from "react";
import styles from './HeaderMenu.module.css';

const HeaderMenu = () => {
  return (
    <nav className={styles.menu_wrapper}>
      <ul className={styles.menu_list}>
        <li>
          <Link href="#">Про нас</Link>
        </li>
        <li>
          <Link href="#">Наукова діяльність</Link>
        </li>
        <li >
          <Link href="#">Дистанційне розмінування</Link>
        </li>
        <li >
          <Link href="#">Контакти</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderMenu;
