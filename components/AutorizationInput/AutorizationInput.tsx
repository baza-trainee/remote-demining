import { forwardRef } from "react";
import { FieldError } from "react-hook-form/dist/types";

import styles from "./AutorizationInput.module.css";

interface AutorizationInputsProps {
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  error?: FieldError | undefined;
  errorMessage?: string;
}
const AutorizationInput = forwardRef<HTMLInputElement, AutorizationInputsProps>(
  ({ label, type, placeholder, error, errorMessage, ...inputProps }, ref) => {
    return (
      <div className={styles.input__container}>
        {label && <label>{label}</label>}
        <input
          className={styles.input}
          ref={ref}
          placeholder={placeholder}
          {...inputProps}
        />
        {error && <p className={styles.error}>{errorMessage}</p>}
      </div>
    );
  }
);

AutorizationInput.displayName = "AutorizationInput";

export default AutorizationInput;
