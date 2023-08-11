"use client";

import Image from "next/image";
import { useState } from "react";

import pen from "@/public/images/adminInputs/pen.svg";

import AdminWrapper from "../AdminWrapper/AdminWrapper";

import AdminCardAdd from "./AdminCardAdd/AdminCardAdd";
import AdminCardsList from "./AdminCardsList/AdminCardsList";

import styles from "./AdminCards.module.css";

const AdminCards = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div>
      <div className={styles.heading_container} >
        <h1 className={styles.heading}>
          <span className={isEditing ? styles.breadcrumb : undefined}>
            Картки
          </span>
          {isEditing && <span className={styles.breadcrumb}>&gt;</span>}
          {isEditing && <span className={styles.edit}>Редагувати</span>}
        </h1>
        <div onClick={()=> {setIsEditing(!isEditing)}}>
          <Image src={pen} alt="edit_img" width={27} height={27} />
        </div>
      </div>
      <AdminWrapper size="bigWrapper">
        {/* <AdminCardsContainer /> */}
        <AdminCardAdd />
      </AdminWrapper>
    </div>
  );
};

export default AdminCards;
