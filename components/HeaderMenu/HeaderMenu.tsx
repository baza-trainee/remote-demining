import Link from "next/link";
import styles from "./HeaderMenu.module.css";

interface HeaderMenuProps {
  isOpenMenu: boolean
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ isOpenMenu }: HeaderMenuProps) => {
  const menuWrapperStyle = `${styles.menu_wrapper} ${isOpenMenu ? styles.openMenu : ""} `
  return (
    <nav className={menuWrapperStyle}>
      <ul className={styles.menu_list}>
        <li className={styles.menu_item}>
          <Link href="#">Про нас</Link>
        </li>
        <li className={styles.menu_item} >
          <Link href="#">Наукова діяльність</Link>
        </li>
        <li className={styles.menu_item} >
          <Link href="#">Дистанційне розмінування</Link>
        </li>
        <li className={styles.menu_item} >
          <Link href="#">Контакти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenu;
