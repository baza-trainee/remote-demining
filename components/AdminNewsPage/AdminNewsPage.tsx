"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useToggle } from "usehooks-ts";

import { createNews, deleteNews, getNews } from "@/lib/admin/content";
import pen from "@/public/images/adminInputs/pen.svg";

import AdminWrapper from "../AdminWrapper/AdminWrapper";
import Button from "../Button/Button";

import AdminNewsAdd from "./AdminNewsAdd/AdminNewsAdd";
import AdminNewsList from "./AdminNewsList/AdminNewsList";

import styles from "./AdminNewsPage.module.css";

export interface AdminNewsValues {
  id: string;
  image: string | null;
  title: string;
  description: string;
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
    description: "",
    link: "",
    date: "",
  });

  useEffect(() => {
    fetchNewsData();
  }, [isEditing]);

  const handleSave = async (data: AdminNewsValues) => {
    await createNews(data);
    await setIsEditing();
  };

  const handleEditNews = (news: AdminNewsValues) => {
    setEditedNews(news);
    setIsEditing();
  };

  const handleDeleteNews = async (id: string) => {
    await deleteNews(id);
    await fetchNewsData();
  };

  const fetchNewsData = async () => {
    try {
      const data = await getNews();
      const newsData = data?.map((news): AdminNewsValues => {
        console.log(news.images[0]);
        return {
          id: news._id,
          image: `https://remote-demining.onrender.com/images/${news.images[0]}`,
          title: news.data.title,
          description: news.data.description,
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
            handleDeleteNews={handleDeleteNews}
          />
        )}
      </AdminWrapper>
    </div>
  );
};

export default AdminNewsPage;
