"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useToggle } from "usehooks-ts";

import { getNews } from "@/lib/admin/content";
import pen from "@/public/images/adminInputs/pen.svg";

import AdminWrapper from "../AdminWrapper/AdminWrapper";
import Button from "../Button/Button";

import AdminNewsAdd from "./AdminNewsAdd/AdminNewsAdd";
import AdminNewsList from "./AdminNewsList/AdminNewsList";

import styles from "./AdminNewsPage.module.css";

export interface AdminNewsValues {
  id: string;
  image: string;
  title: string;
  img_description: string;
  text: string;
  link: string;
  date: string;
}

const AdminNewsPage: React.FC = () => {
  const [isEditing, setIsEditing] = useToggle(false);
  const [newsData, setNewsData] = useState<AdminNewsValues[]>();
  const [editedNews, setEditedNews] = useState<AdminNewsValues>({
    id: "",
    image: "",
    title: "",
    img_description: "",
    text: "",
    link: "",
    date: "",
  });

  useEffect(() => {
    fetchNewsData();
  }, [isEditing]);

  const handleSave = () => {
    setIsEditing();
  };

  const handleEditNews = (data: AdminNewsValues) => {
    setEditedNews(data);
    setIsEditing();
  };

  const onDelete = async () => {
    await fetchNewsData();
  };

  const fetchNewsData = async () => {
    try {
      const data = await getNews();
      const newsData = data?.map((news): AdminNewsValues => {
        return {
          id: news._id,
          image: news.images[0],
          title: news.data.title,
          img_description: news.data.img_description,
          text: news.data.text,
          link: news.data.link,
          date: news.data.date,
        };
      });
      setNewsData(newsData);
    } catch (e) {
      console.error(e);
    }
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
                setIsEditing();
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
          <AdminNewsAdd onSave={handleSave} newsData={editedNews} />
        ) : (
          <AdminNewsList
            newsData={newsData}
            handleEditNews={handleEditNews}
            onDelete={onDelete}
          />
        )}
      </AdminWrapper>
    </div>
  );
};

export default AdminNewsPage;
