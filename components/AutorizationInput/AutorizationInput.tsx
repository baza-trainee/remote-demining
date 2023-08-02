import styles from "./AutorizationInput.module.css";

interface AutorizationInputsProps {
  value: string;
  label: string;
  name: string;
  type : string;
  placeholder? : string;
}
const AutorizationInput: React.FC<AutorizationInputsProps> = ({
  value,
  label,
  name,
  type,
  placeholder
}) => {
  return (
    <div className={styles.input__container}>
      {label && <label>{label}</label>}
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
export default AutorizationInput;
