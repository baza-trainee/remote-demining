import { FC } from "react";

import AdminWrapper from "../AdminWrapper/AdminWrapper";
import AutorizationInput from "../AutorizationInput/AutorizationInput";
import PasswordInputToggle from "../PasswordInputToggle/PasswordInputToggle";

import styles from "./AdminLoginPage.module.css";
import Link from "next/link";
import Button from "../Button/Button";

const AdminLoginPage: FC = () => {
  return (
    <section className={styles.section}>
      <AdminWrapper size="smallWrapper" classname={styles.wrapper}>
        <h3 className={styles.heading}>Вхід</h3>
        <form className={styles.form}>
          <AutorizationInput
            name="login"
            label="Логін"
            type="text"
            placeholder="Введіть логін"
          />
          <PasswordInputToggle />
        </form>
        <Link href={"#"} className={styles.link}>
          Забули пароль?
        </Link>
        <Button isFullWidth type="submit">
          Вхід
        </Button>
      </AdminWrapper>
    </section>
  );
};

export default AdminLoginPage;
