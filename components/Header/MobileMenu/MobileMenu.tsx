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
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpenMenu, toggleMenu }) => {
  const [isModalOpen, toggleModal] = useToggle(false);
  return (
    <div className={styles.burger_menu}>
      <div className={styles.sub_menu}>
        <HeaderMenu isOpenMenu={isOpenMenu} isMobile toggleMenu={toggleMenu} />
        <LanguageMenu isOpenMenu={isOpenMenu} isMobile />
      </div>
      <div className={styles.burger_btn_container}>
        <Button isFullWidth onClick={toggleModal}>
          Підтримати
        </Button>
        {isModalOpen && (
          <Modal isBigModal toggleModal={toggleModal} isModalOpen={isModalOpen}>
            <Donate />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
