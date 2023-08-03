import styles from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
  isBigModal?: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, isBigModal}) => {
  const contentStyle = `${styles.content} ${isBigModal ? styles.big_modal : ""}`
  return (
    <div className={styles.container}>
      <div className={contentStyle} >
      {children}
      </div>
    </div>
  )
}

export default Modal