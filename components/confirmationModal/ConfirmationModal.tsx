import Image from "next/image";

import close_modal from "@/public/images/icons/header/btn_close_burger.svg";

import Button from "../Button/Button";

import styles from "./ConfirmationModal.module.css";

interface ConfirmationModalProps {
  message: string;
  toggleModal: () => void;
  approveChanges?: () => void;
  discardChanges?: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  message,
  toggleModal,
  discardChanges,
  approveChanges,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
      {approveChanges && discardChanges && (
        <div className={styles.btn_container}>
          <Button onClick={discardChanges}>Скасувати</Button>
          <Button onClick={approveChanges}>Видалити</Button>
        </div>
      )}
      <button className={styles.btn_close} onClick={toggleModal}>
        <Image
          className={styles.close_icon}
          src={close_modal}
          alt="close modal"
          width={24}
          height={24}
        ></Image>
      </button>
    </div>
  );
};

export default ConfirmationModal;
