"use client";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import {view} from 'react-icons-kit/ikons/view';
import {view_off} from 'react-icons-kit/ikons/view_off';

import styles from "./AdminAutorizationInput.module.css";

const AdminAutorizationInput = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(view_off);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(view);
      setType("text");
    } else {
      setIcon(view_off);
      setType("password");
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.input__container}>
        <label htmlFor="log">Логін</label>
        <input
          className={styles.input}
          type="text"
          name="log"
          placeholder="Введіть логін"
        />
      </div>
      <div className={`${styles.input__container} ${styles.psw__input__container}`}>
        <label className={styles.label__psw} htmlFor="psw">
          Пароль
        </label>
        <input
          className={styles.input}
          type={type}
          name="psw"
          placeholder="Введіть пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className={styles.eye} onClick={handleToggle}>
          <Icon icon={icon} size={25} />
        </span>
      </div>
    </div>
  );
};
export default AdminAutorizationInput;
