import AdminContactsPage from "@/components/AdminContactsPage/AdminContactsPage";
import AdminNavBar from "@/components/AdminNavBar/AdminNavBar";

import styles from "../layout.module.css";

const Contacts = () => {
  return (
    <div className={styles.pageWrapper}>
      <AdminNavBar />
      <AdminContactsPage />
    </div>
  );
};

export default Contacts;
