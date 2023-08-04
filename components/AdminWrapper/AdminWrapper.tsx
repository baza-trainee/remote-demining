import styles from "./AdminWrapper.module.css";

type WrapperSize = "bigWrapper" | "smallWrapper";

interface WrapperProps {
  children: React.ReactNode;
  size: WrapperSize;
  classname?: string;
}

const AdminWrapper: React.FC<WrapperProps> = ({
  children,
  size,
  classname,
}) => {
  return (
    <div className={`${styles.wrapper} ${styles[size]} ${classname || ""}`}>
      {children}
    </div>
  );
};

export default AdminWrapper;
