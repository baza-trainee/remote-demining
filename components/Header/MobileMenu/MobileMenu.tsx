import Button from "@/components/Button/Button";

import HeaderMenu from "../HeaderMenu/HeaderMenu";
import LanguageMenu from "../LanguageMenu/LanguageMenu";

import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  isOpenMenu: boolean;
  toggleMenu?: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpenMenu, toggleMenu }) => {
  return (
    <div className={styles.burger_menu}>
      <div className={styles.sub_menu}>
        <HeaderMenu isOpenMenu={isOpenMenu} isMobile toggleMenu={toggleMenu} />
        <LanguageMenu isOpenMenu={isOpenMenu} isMobile />
      </div>
      <div className={styles.burger_btn_container}>
        <Button isFullWidth>Підтримати</Button>
      </div>
    </div>
  );
};

export default MobileMenu;
