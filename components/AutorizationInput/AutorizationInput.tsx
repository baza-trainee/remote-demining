import { FieldError } from "react-hook-form/dist/types";

import styles from "./AutorizationInput.module.css";

interface AutorizationInputsProps {
  value?: string;
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  error?: FieldError | undefined;
  errorMessage?: string;
}
const AutorizationInput: React.FC<AutorizationInputsProps> = ({
  value,
  label,
  name,
  type,
  placeholder,
  error,
  errorMessage,
  ...inputProps
}) => {
  return (
    <div className={styles.input__container}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className={styles.input}
        placeholder={placeholder}
        {...inputProps}
      />
      {error && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};
export default AutorizationInput;
