import React from "react";

import AdminCards from "@/components/AdminCards/AdminCards";
import AdminNavBar from "@/components/AdminNavBar/AdminNavBar";

import styles from "../layout.module.css";


function Cards() {
  return (
    <div className={styles.pageWrapper}>
      <AdminNavBar />
      <AdminCards />
    </div>
  );
}

export default Cards;
