import styles from "./AdminWrapper.module.css";

interface WrapperProps {
  children: React.ReactNode;
}

const AdminWrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default AdminWrapper;
