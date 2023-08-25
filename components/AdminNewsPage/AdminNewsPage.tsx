"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getNews } from "@/lib/admin/content";
import pen from "@/public/images/adminInputs/pen.svg";

import AdminWrapper from "../AdminWrapper/AdminWrapper";
import Breadcrumb, { CrumbItem } from "../Breadcrumb/Breadcrumb";

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

const items: CrumbItem[] = [{ label: "Новини", path: "/admin/news" }];

const AdminNewsPage: React.FC = () => {
  const [newsData, setNewsData] = useState<AdminNewsValues[]>();
  const router = useRouter();

  useEffect(() => {
    fetchNewsData();
  }, []);

  const handleEditNews = (data: AdminNewsValues) => {
    router.push(`/admin/news/edit?id=${data.id}`);
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
      toast.error("Упс..., щось пішло не так!");
    }
  };

  return (
    <div>
      <div className={styles.heading_container}>
        <Breadcrumb items={items} />
        <Image src={pen} alt="edit_img" width={27} height={27} />
      </div>
      <AdminWrapper size="bigWrapper">
        <AdminNewsList
          newsData={newsData}
          handleEditNews={handleEditNews}
          onDelete={onDelete}
        />
      </AdminWrapper>
    </div>
  );
};

export default AdminNewsPage;
