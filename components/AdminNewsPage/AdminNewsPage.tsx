"use client";
import Image from "next/image";
import { useState } from "react";

import pen from "@/public/images/adminInputs/pen.svg";

import AdminWrapper from "../AdminWrapper/AdminWrapper";
import Button from "../Button/Button";

import AdminNewsAdd from "./AdminNewsAdd/AdminNewsAdd";
import AdminNewsList from "./AdminNewsList/AdminNewsList";

import styles from "./AdminNewsPage.module.css";

export interface AdminNewsValues {
  id: number;
  image: string | null;
  title: string;
  description: string;
  link: string;
  date: string;
}

const AdminNewsPage: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <div className={styles.heading_container}>
        <h1 className={styles.heading}>
          <span className={isEditing ? styles.breadcrumb : undefined}>
            Новини
          </span>
          {isEditing && <span className={styles.breadcrumb}>&gt;</span>}
          {isEditing && (
            <span className={styles.edit}>Додати картки новин</span>
          )}
        </h1>
        <div>
          {isEditing ? (
            <Button
              outlined
              onClick={() => {
                setIsEditing(!isEditing);
              }}
              className={styles.backBtn}
            >
              Назад
            </Button>
          ) : (
            <Image src={pen} alt="edit_img" width={27} height={27} />
          )}
        </div>
      </div>
      <AdminWrapper size="bigWrapper">
        {isEditing ? (
          <AdminNewsAdd />
        ) : (
          <AdminNewsList toggleEditing={toggleEditing} />
        )}
      </AdminWrapper>
    </div>
  );
};

export default AdminNewsPage;
