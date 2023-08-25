import { FC } from "react";
import { ToastContainer } from "react-toastify";

import AdminNavBar from "@/components/AdminNavBar/AdminNavBar";

import "react-toastify/dist/ReactToastify.css";
import styles from "./layout.module.css";

const LoggedInLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.pageWrapper}>
      <AdminNavBar />
      {children}
      <ToastContainer />
    </div>
  );
};

export default LoggedInLayout;
