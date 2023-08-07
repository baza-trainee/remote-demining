import AdminNavBar from "@/components/AdminNavBar/AdminNavBar";

import styles from "../layout.module.css";

const Page = () => {
  return (
    <div className={styles.pageWrapper}>
      <AdminNavBar />
      <h1>News</h1>
    </div>
  );
};

export default Page;
