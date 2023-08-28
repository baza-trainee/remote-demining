"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToggle } from "usehooks-ts";

import AdminEditContactsInput from "@/components/AdminEditContactsForm/AdminEditContactsInput";
import AdminWrapper from "@/components/AdminWrapper/AdminWrapper";
import Breadcrumb, { CrumbItem } from "@/components/Breadcrumb/Breadcrumb";
import Button from "@/components/Button/Button";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import AddImage from "@/components/Crop/AddImage";
import Modal from "@/components/Modal/Modal";
import { createNews, updateNews } from "@/lib/admin/content";

import { AdminNewsValues } from "../AdminNewsPage";

import validationSchema from "./validationSchema";

import styles from "./AdminNewsAdd.module.css";

type AdminNews = Omit<AdminNewsValues, "id">;

interface AdminNewsAddProps {
  newsData: AdminNewsValues;
}

const items: CrumbItem[] = [
  { label: "Новини", path: "/admin/news" },
  { label: "Додати картки новин", path: "/admin/news/edit" },
];

const AdminNewsAdd: React.FC<AdminNewsAddProps> = ({ newsData }) => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [isLoading, setIsLoading] = useToggle(false);
  const [image, setImage] = useState<string | null>("");
  const [successModal, toggleSuccessModal] = useToggle(false);
  const isNewNews = !newsData.id;
  
  useEffect(() => {
    if (newsData) {
      setValue("image", newsData.image);
      setValue("title", newsData.title);
      setValue("img_description", newsData.img_description);
      setValue("text", newsData.text);
      setValue("link", newsData.link);
      setValue("date", newsData.date);
    }

    if (image) {
      setValue("image", image);
    }
  }, [image, newsData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AdminNewsValues>({
    defaultValues: {
      image: newsData.image,
      title: newsData.title,
      img_description: newsData.img_description,
      text: newsData.text,
      link: newsData.link,
      date: newsData.date,
    },
    resolver: yupResolver(validationSchema) as any,
  });

  const onSubmit: SubmitHandler<AdminNews> = async (data) => {
    try {
      setIsLoading();

      const payload = { id: newsData.id, ...data };

      if (data.image && data.image[0] !== newsData.image[0]) {
        payload.image = data.image;
      } else {
        payload.image = "";
      }

      !isNewNews
        ? await updateNews(payload)
        : await createNews({ id: newsData.id, ...data });
      setIsLoading();
      setImage("");
      toggleModal();
    } catch (error) {
      setIsLoading();
      console.error(error);
      toast.error("Упс..., щось пішло не так!");
    }
  };

  const closeModal = () => {
    toggleModal();
  };

  const modalMessage = isNewNews
    ? "Новину успішно додано"
    : "Новину успішно оновлено";

  return (
    <div>
      <div className={styles.heading_container}>
        <Breadcrumb items={items} />
        <Link href="/admin/news" className={styles.backBtn}>
          Назад
        </Link>
      </div>
      <AdminWrapper size="bigWrapper">
        <form
          className={styles.container}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <AddImage
            title="Додати зображення"
            setImage={setImage}
            toggleSuccessModal={toggleSuccessModal}
          />
          {errors.image?.message && (
            <span className={styles.error_message}>{errors.image.message}</span>
          )}
          <div className={styles.input_container}>
            <AdminEditContactsInput
              placeholder="Заголовок"
              editable
              {...register("title")}
              error={errors.title}
              errorMessage={errors.title?.message}
              autoComplete="off"
            />
            <AdminEditContactsInput
              placeholder="Опис зображення"
              editable
              {...register("img_description")}
              error={errors.img_description}
              errorMessage={errors.img_description?.message}
              autoComplete="off"
            />
            <AdminEditContactsInput
              placeholder="Опис новини"
              editable
              {...register("text")}
              error={errors.text}
              errorMessage={errors.text?.message}
              autoComplete="off"
            />
            <AdminEditContactsInput
              placeholder="Посилання на новину"
              editable
              {...register("link")}
              error={errors.link}
              errorMessage={errors.link?.message}
              autoComplete="off"
            />
            <AdminEditContactsInput
              placeholder="Дата публікації"
              editable
              {...register("date")}
              error={errors.date}
              errorMessage={errors.date?.message}
              autoComplete="off"
            />
          </div>
          <div className={styles.btn_send_container}>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Завантажується…" : "Надіслати"}
            </Button>
          </div>
          {isModalOpen && (
            <Modal isModalOpen={isModalOpen} toggleModal={closeModal}>
              <ConfirmationModal message={modalMessage} />
            </Modal>
          )}
        </form>
      </AdminWrapper>
  {successModal && (
    <Modal isModalOpen={successModal} toggleModal={toggleSuccessModal}>
      <ConfirmationModal message="Зображення успішно додано" />
    </Modal>
  )}
    </div>
  );
};

export default AdminNewsAdd;
