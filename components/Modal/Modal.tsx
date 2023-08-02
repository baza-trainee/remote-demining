import Image from 'next/image';

import close_modal from "@/public/images/icons/header/btn_close_burger.svg"

import Donate from '../Donate/Donate';

import styles from './Modal.module.css';

interface ModalProps {
  isActive: boolean;
  toggleModal?: () => void;
}

const Modal: React.FC<ModalProps> = ({isActive, toggleModal}) => {
  return (
    <div className={styles.container} hidden = {!isActive}>
      <div className={styles.content} >
      <button className={styles.btn_close} onClick={toggleModal}>
                <Image
                  className={styles.close_icon}
                  src={close_modal}
                  alt="close modal"
                  width={25.852943420410156}
                  height={30}
                ></Image>
              </button>
      <Donate />
      </div>
    </div>
  )
}

export default Modal