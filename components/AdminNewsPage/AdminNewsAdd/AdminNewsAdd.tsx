"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AddButton from "@/components/AddButton/AddButton";
import AdminEditContactsInput from "@/components/AdminEditContactsForm/AdminEditContactsInput";
import Button from "@/components/Button/Button";
import AddImage from "@/components/Crop/AddImage";

import validationSchema from "./validationSchema";

import styles from "./AdminNewsAdd.module.css";

interface AdminNewsAddValues {
  image: string;
  title: string;
  description: string;
  link: string;
}

const AdminNewsAdd = () => {
  const [image, setImage] = useState<string | null>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    setValue,
  } = useForm<AdminNewsAddValues>({
    defaultValues: {
      image: "",
      title: "",
      description: "",
      link: "",
    },
    resolver: yupResolver(validationSchema),
  });

  return (
    <form className={styles.container}>
      <AddImage
        imgWidth={310}
        imgHeight={170}
        title="Додати зображення"
        setImage={setImage}
      />
      <div className={styles.input_container}>
        <AdminEditContactsInput placeholder="Заголовок" editable />
        <AdminEditContactsInput placeholder="Опис зображення" editable />
        <AdminEditContactsInput placeholder="Посилання на новину" editable />
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
