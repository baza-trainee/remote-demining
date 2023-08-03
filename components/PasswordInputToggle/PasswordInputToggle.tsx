"use client";
import Image from "next/image";
import { useState } from "react";

import eye from "@/public/images/adminInputs/eye.svg";
import eyeOff from "@/public/images/adminInputs/eyeOff.svg";

import styles from "./PasswordInputToggle.module.css";

const PasswordInputToggle = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div
      className={styles.input__container}
    >
      <label className={styles.label__psw} htmlFor="psw">
        Пароль
      </label>
      <input
        id="psw"
        className={styles.input}
        type={type}
        name="psw"
        placeholder="Введіть пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <span className={styles.eye} onClick={handleToggle}>
        <Image width={30} height={18} src={icon} alt="eye" />
      </span>
    </div>
  );
};
export default PasswordInputToggle;
