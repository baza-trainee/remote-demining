"use client";
import Image from "next/image";
import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form/dist/types";

import pen from "@/public/images/adminInputs/pen.svg";

import styles from "./AdminEditContactsInput.module.css";

interface AdminEditContactsInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onClick"> {
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  error?: FieldError | undefined;
  errorMessage?: string;
  editable: boolean;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}
const AdminEditContactsInput = forwardRef<
  HTMLInputElement,
  AdminEditContactsInputProps
>(
  (
    {
      label,
      type,
      placeholder,
      editable = false,
      error,
      errorMessage,
      onClick,
      ...inputProps
    },
    ref
  ) => {
    return (
      <div className={styles.input__container}>
        {label && <label>{label}</label>}
        <input
          ref={ref}
          className={styles.input}
          type={type}
          placeholder={placeholder}
          {...inputProps}
        />
        <span className={styles.pen}>
          {editable && (
            <Image
              width={36}
              height={36}
              src={pen}
              alt="pen"
              onClick={onClick}
            />
          )}
        </span>
        {error && <p className={styles.error}>{errorMessage}</p>}
      </div>
    );
  }
);

AdminEditContactsInput.displayName = "AdminEditContactsInput";

export default AdminEditContactsInput;
