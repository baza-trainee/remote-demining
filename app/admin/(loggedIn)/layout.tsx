import { FC } from "react";

import AdminNavBar from "@/components/AdminNavBar/AdminNavBar";

import styles from "./layout.module.css";

const LoggedInLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.pageWrapper}>
      <AdminNavBar />
      {children}
    </div>
  );
};

export default LoggedInLayout;
