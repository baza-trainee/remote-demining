"use client";

import AdminWrapper from "../AdminWrapper/AdminWrapper";

import PasswordReset from "./PasswordReset/PasswordReset";
import SandMail from "./SandMail/SandMail";

import styles from "./PasswordRecover.module.css";


const PasswordRecover = () => {

  return (
    <div className={styles.wrapper}>
      <AdminWrapper size="smallWrapper">
      <h2 className={styles.title}>Відновити пароль</h2>
      <SandMail />
      {/* <PasswordReset /> */}
      </AdminWrapper>
    </div>
  );
};

export default PasswordRecover;
