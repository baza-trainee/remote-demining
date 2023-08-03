"use client";
import Image from "next/image";
import { useEffect } from "react";

import close_modal from "@/public/images/icons/header/btn_close_burger.svg";

import styles from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  isBigModal?: boolean;
  toggleModal: () => void;
  isModalOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isBigModal,
  isModalOpen,
  toggleModal,
}) => {
  const contentStyle = `${styles.content} ${
    isBigModal ? styles.big_modal : ""
  }`;
  const btnClose = `${styles.btn_close} ${
    isBigModal ? styles.btn_close_bm : ""
  }`;

  const closeModal = () => {
    document.querySelector("html")?.classList.remove(styles.overflowHidden);
    window.removeEventListener('keydown', HandleEscBtn);
    toggleModal();
  };

  const HandleEscBtn = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
  }

  useEffect(() => {
    if (isModalOpen) {
      document.querySelector("html")?.classList.add(styles.overflowHidden);
    }
    window.addEventListener('keydown', HandleEscBtn);
  }, [isModalOpen]);


  return (
    <div className={styles.container} >
      <div className={contentStyle}>
        {children}
        <button className={btnClose} onClick={closeModal}>
          <Image
            className={styles.close_icon}
            src={close_modal}
            alt="close modal"
            width={isBigModal ? 25.852943420410156 : 24}
            height={isBigModal ? 30 : 24}
          ></Image>
        </button>
      </div>
    </div>
  );
};

export default Modal;
