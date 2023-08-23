import Button from "../Button/Button";

import styles from "./ConfirmationModal.module.css";

interface ConfirmationModalProps {
  message: string;
  approveChanges?: () => void;
  discardChanges?: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  message,
  discardChanges,
  approveChanges,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
      {approveChanges && discardChanges && (
        <div className={styles.btn_container}>
          <Button onClick={discardChanges}>Скасувати</Button>
          <Button onClick={approveChanges} outlined >Видалити</Button>
        </div>
      )}
    </div>
  );
};

export default ConfirmationModal;
