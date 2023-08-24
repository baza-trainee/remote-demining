import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToggle } from "usehooks-ts";

import AdminEditContactsInput from "@/components/AdminEditContactsForm/AdminEditContactsInput";
import Button from "@/components/Button/Button";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import AddImage from "@/components/Crop/AddImage";
import Modal from "@/components/Modal/Modal";
import { createCard, updateCard } from "@/lib/admin/cards";

import { AdminCardsData } from "../AdminCards";
import validationSchema from "../validationSchema";

import styles from "./AdminCardAdd.module.css";

type AdminCard = Omit<AdminCardsData, "id">;

interface AdminCardAddProps {
  cardData: AdminCardsData;
  onSave: () => void;
}

const AdminCardAdd: React.FC<AdminCardAddProps> = ({ onSave, cardData }) => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [croppedImg, setCroppedImg] = useState<string | null>(null);
  const closeModal = () => {
    toggleModal();
    onSave();
  };

  useEffect(() => {
    // console.log(cardData);
    if (croppedImg && croppedImg !== "") {
      setValue("img", croppedImg);
    }
  }, [croppedImg]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      img: cardData.img || "",
      title: cardData.title,
      img_description: cardData.img_description,
      text: cardData.text,
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<AdminCard> = async (data) => {
    try {
      cardData.img === data.img
        ? await updateCard({
            id: cardData.id,
            title: data.title,
            img_description: data.img_description,
            text: data.text,
          })
        : await createCard({ id: cardData.id, ...data });
      await toggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <AddImage
        imgWidth={431}
        imgHeight={240}
        setImage={setCroppedImg}
        title={"Додати зображення"}
      />
      {errors.img?.message && (
        <span className={styles.error_message}>{errors.img.message}</span>
      )}
      <div className={styles.input_container}>
        <AdminEditContactsInput
          placeholder={"Заголовок"}
          editable
          {...register("title")}
          error={errors.title}
          errorMessage={errors.title?.message}
        />
        <AdminEditContactsInput
          placeholder={"Опис зображення"}
          editable
          {...register("img_description")}
          error={errors.img_description}
          errorMessage={errors.img_description?.message}
        />
        <AdminEditContactsInput
          placeholder={"Опис пункту"}
          editable
          {...register("text")}
          error={errors.text}
          errorMessage={errors.text?.message}
        />
      </div>
      <div className={styles.btn_send_container}>
        <Button type="submit">Надіслати</Button>
      </div>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} toggleModal={closeModal}>
          <ConfirmationModal
            message={
              cardData.id === ""
                ? "Картку успішно додано"
                : "Картку успішно оновлено"
            }
          />
        </Modal>
      )}
    </form>
  );
};

export default AdminCardAdd;
