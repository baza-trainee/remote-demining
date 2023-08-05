import { ReactNode } from "react";

import AdminWrapper from "../AdminWrapper/AdminWrapper";

import styles from "./PasswordRecover.module.css";

interface PasswordRecoverProps {
  children: ReactNode;
}

const PasswordRecover: React.FC<PasswordRecoverProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <AdminWrapper size="smallWrapper" classname={styles.wrapper}>
        <h2 className={styles.title}>Відновити пароль</h2>
        {children}
      </AdminWrapper>
    </div>
  );
};

export default PasswordRecover;
