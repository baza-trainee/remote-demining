"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import { getReports } from "@/lib/admin/content";
import addImg from "@/public/images/admin/add.svg";
import pencil from "@/public/images/adminInputs/pen.svg";
import download from "@/public/images/icons/admin/download.svg";
import trash from "@/public/images/icons/admin/trash.svg";

import styles from "./AdminReportsList.module.css";

const AdminReportsList = () => {
  const fetchReportsData = async () => {
    try {
      const data = await getReports();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchReportsData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.download_container}>
          <p>Оберіть звітність</p>
          <Image
            className={styles.icon}
            src={download}
            width={24}
            height={24}
            alt="Іконка завантаження"
          />
        </div>
        <div className={styles.edit_delete_container}>
          <Link href="/admin/reports/edit" className={styles.add_container}>
            <Image src={addImg} width={24} height={24} alt="Знак плюс" />
            <p className={styles.add_text}>Додати звітність</p>
          </Link>
          <div className={styles.delete_container}>
            <Image src={pencil} alt="Олівець" width={27} height={27} />
            <button className={styles.pencil}>
              <Image
                src={trash}
                alt="Декоративна корзина для сміття"
                width={27}
                height={27}
              />
            </button>
          </div>
        </div>
      </div>
      <p></p>
    </>
  );
};

export default AdminReportsList;
