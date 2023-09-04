"use client";
import { redirect } from "next/navigation";
import { FC, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useReadLocalStorage } from "usehooks-ts";

import AdminNavBar from "@/components/AdminNavBar/AdminNavBar";

import "react-toastify/dist/ReactToastify.css";
import styles from "./layout.module.css";

const LoggedInLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = useReadLocalStorage("token");

  useEffect(() => {
    if (!token) {
      redirect("/admin");
    }
  }, [token]);

  return (
    <div className={styles.pageWrapper}>
      <AdminNavBar />
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </div>
  );
};

export default LoggedInLayout;
