"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import AdminNewsAdd from "@/components/AdminNewsPage/AdminNewsAdd/AdminNewsAdd";
import { AdminNewsValues } from "@/components/AdminNewsPage/AdminNewsPage";
import { getNewsById } from "@/lib/admin/content";
import { toast } from "react-toastify";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

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
  }, [id]);

  const fetchNewsData = async () => {
    if (id) {
      try {
        const data = await getNewsById(id as string);
        const newsData = {
          id: data._id,
          image: data.images[0],
          title: data.data.title,
          img_description: data.data.img_description,
          text: data.data.text,
          link: data.data.link,
          date: data.data.date,
        };
        setEditedNews(newsData);
      } catch (e) {
        toast.error("Упс..., щось пішло не так!", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.error(e);
      }
    }
  };

  const handleSave = () => {
    router.push("/admin/news");
  };

  return (
    <>
      <AdminNewsAdd onSave={handleSave} newsData={editedNews} />
    </>
  );
};

export default Page;
