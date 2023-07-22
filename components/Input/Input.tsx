import { ComponentProps, forwardRef } from "react";
import { FieldError } from "react-hook-form/dist/types";

import styles from "./Input.module.css";

enum InputSize {
  base = "base",
  full = "full",
}

interface InputProps {
  placeholder?: ComponentProps<"input">["placeholder"];
  name?: ComponentProps<"input">["name"];
  onChange?: ComponentProps<"input">["onChange"];
  onBlur?: ComponentProps<"input">["onBlur"];
  disabled?: ComponentProps<"input">["disabled"];
  type?: ComponentProps<"input">["type"];
  size?: keyof typeof InputSize;
  label?: string;
  height?: number;
  width?: number;
  error?: FieldError | undefined;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = InputSize.base,
      label,
      height,
      width,
      error,
      errorMessage,
      ...inputProps
    },
    ref
  ) => {
    const InputStyle = {
      height: height ? `${height}px` : undefined,
      width: width ? `${width}px` : undefined,
      borderColor: error ? "var(--error-color)" : undefined,
    };

    return (
      <div>
        {label && <label className={styles.label}>{label}</label>}
        <input
          ref={ref}
          {...inputProps}
          className={`${styles[size]} ${styles.input}`}
          style={InputStyle}
        />
        {error && <p className={styles.error}>{errorMessage}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
