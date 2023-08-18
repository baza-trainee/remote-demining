"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AddButton from "@/components/AddButton/AddButton";
import AdminEditContactsInput from "@/components/AdminEditContactsForm/AdminEditContactsInput";
import Button from "@/components/Button/Button";
import AddImage from "@/components/Crop/AddImage";

import { AdminNewsValues } from "../AdminNewsPage";

import validationSchema from "./validationSchema";

import styles from "./AdminNewsAdd.module.css";

const AdminNewsAdd = () => {
  const [image, setImage] = useState<string | null>("");

  useEffect(() => {
    if (image) {
      setValue("image", image);
    }
  }, [image]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    setValue,
  } = useForm<AdminNewsValues>({
    defaultValues: {
      image: null,
      title: "",
      description: "",
      link: "",
    },
    resolver: yupResolver(validationSchema) as any,
  });

  const onSubmit = (data: AdminNewsValues) => {
    console.log(data);
  };

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <AddImage
        imgWidth={310}
        imgHeight={170}
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
    </form>
  );
};

export default AdminNewsAdd;
