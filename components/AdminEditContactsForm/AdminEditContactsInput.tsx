"use client"
import Image from "next/image";

import pen from "@/public/images/adminInputs/pen.svg";

import styles from "./AdminEditContactsInput.module.css";

interface AdminEditContactsInputProps {
  value: string;
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  onChange: (value:string) => void;
  editable?:boolean;
}
const AdminEditContactsInput: React.FC<AdminEditContactsInputProps> = ({
  value,
  label,
  name,
  type,
  placeholder,
  onChange,
  editable = false,
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
      <span className={styles.pen} >
        {editable && <Image width={36} height={36} src={pen} alt="eye" onClick={()=> onChange(value)}/>}
      </span>
    </div>
  );
};
export default AdminEditContactsInput;