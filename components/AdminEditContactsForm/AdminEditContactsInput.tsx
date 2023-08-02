"use client";
import Image from "next/image";
import { FieldError } from "react-hook-form/dist/types";

import pen from "@/public/images/adminInputs/pen.svg";

import styles from "./AdminEditContactsInput.module.css";

interface AdminEditContactsInputProps {
  value?: string;
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  onClick?: React.MouseEventHandler<HTMLImageElement> | undefined;
  editable?: boolean;
  error?: FieldError | undefined;
  errorMessage?: string;
}
const AdminEditContactsInput: React.FC<AdminEditContactsInputProps> = ({
  value,
  label,
  name,
  type,
  placeholder,
  onClick,
  editable = false,
  error,
  errorMessage,
  ...inputProps
}) => {
  return (
    <div className={styles.input__container}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        className={styles.input}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        {...inputProps}
      />
      <span className={styles.pen}>
        {editable && (
          <Image width={36} height={36} src={pen} alt="pen" onClick={onClick} />
        )}
      </span>
      {error && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};
export default AdminEditContactsInput;
