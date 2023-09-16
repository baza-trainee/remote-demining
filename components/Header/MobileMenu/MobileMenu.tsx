import { useToggle } from "usehooks-ts";

import Button from "@/components/Button/Button";
import Donate from "@/components/Donate/Donate";
import Modal from "@/components/Modal/Modal";

import HeaderMenu from "../HeaderMenu/HeaderMenu";
import LanguageMenu from "../LanguageMenu/LanguageMenu";

import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  isOpenMenu: boolean;
  toggleMenu?: () => void;
  toggleModal: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpenMenu, toggleMenu, toggleModal }) => {
  return (
    <div className={styles.burger_menu}>
      <div className={styles.sub_menu}>
        <HeaderMenu isOpenMenu={isOpenMenu} isMobile toggleMenu={toggleMenu} />
        {/* <LanguageMenu isOpenMenu={isOpenMenu} isMobile /> */}
      </div>
      <div className={styles.burger_btn_container}>
        <Button isFullWidth onClick={toggleModal}>
          Підтримати
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
