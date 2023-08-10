import AdminNavBar from "@/components/AdminNavBar/AdminNavBar";
import AdminNewsPage from "@/components/AdminNewsPage/AdminNewsPage";

import styles from "../layout.module.css";

const Page = () => {
  return (
    <div className={styles.pageWrapper}>
      <AdminNavBar />
      <AdminNewsPage />
    </div>
  );
};

export default Page;
