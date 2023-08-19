"use client";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToggle } from "usehooks-ts";

import AddButton from "@/components/AddButton/AddButton";
import AdminEditContactsInput from "@/components/AdminEditContactsForm/AdminEditContactsInput";
import Button from "@/components/Button/Button";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import AddImage from "@/components/Crop/AddImage";
import Modal from "@/components/Modal/Modal";

import { AdminNewsValues } from "../AdminNewsPage";

import validationSchema from "./validationSchema";

import styles from "./AdminNewsAdd.module.css";

type AdminNews = Omit<AdminNewsValues, "id">;

interface AdminNewsAddProps {
  newsData: AdminNewsValues;
  onSave: ({}: AdminNewsValues) => void;
}

const AdminNewsAdd: React.FC<AdminNewsAddProps> = ({ newsData, onSave }) => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [image, setImage] = useState<string | null>("");

  useEffect(() => {
    if (image) {
      setValue("image", image);
    }
  }, [image]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AdminNewsValues>({
    defaultValues: {
      image: newsData.image,
      title: newsData.title,
      description: newsData.description,
      link: newsData.link,
      date: newsData.date,
    },
    resolver: yupResolver(validationSchema) as any,
  });

  const onSubmit: SubmitHandler<AdminNews> = async (data) => {
    onSave({ id: newsData.id, ...data });
    toggleModal();
  };

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <AddImage
        imgWidth={437}
        imgHeight={240}
        title="Додати зображення"
        setImage={setImage}
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
        />
        <AdminEditContactsInput
          placeholder="Опис зображення"
          editable
          {...register("description")}
          error={errors.description}
          errorMessage={errors.description?.message}
        />
        <AdminEditContactsInput
          placeholder="Посилання на новину"
          editable
          {...register("link")}
          error={errors.link}
          errorMessage={errors.link?.message}
        />
        <AdminEditContactsInput
          placeholder="Дата публікації"
          editable
          {...register("date")}
          error={errors.date}
          errorMessage={errors.date?.message}
        />
      </div>
      <div className={styles.btn_add_container}>
        <AddButton />
      </div>
      <div className={styles.btn_send_container}>
        <Button type="submit">Надіслати</Button>
      </div>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} toggleModal={toggleModal}>
          <ConfirmationModal message="Новину успішно додано" />
        </Modal>
      )}
    </form>
  );
};

export default AdminNewsAdd;
