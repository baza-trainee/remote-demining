import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { createCard, updateCard } from "@/lib/admin/cards";

import { AdminCardsData } from "../AdminCards";
import validationSchema from "../validationSchema";

import styles from "./AdminCardAdd.module.css";

type AdminCard = Omit<AdminCardsData, "id">;

interface AdminCardAddProps {
  cardData: AdminCardsData;
}

const items: CrumbItem[] = [
  { label: "Картки", path: "/admin/cards" },
  { label: "Додати Картки", path: "/admin/cards/edit" },
];

const AdminCardAdd: React.FC<AdminCardAddProps> = ({ cardData }) => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [successModal, toggleSuccessModal] = useToggle(false);
  const [croppedImg, setCroppedImg] = useState<string | null>(null);
  const router = useRouter();
  const closeModal = () => {
    toggleModal();
    router.push(`/admin/cards`);
  };

  useEffect(() => {
    // console.log(cardData);
    if (cardData) {
      setValue("img", cardData.img || "");
      setValue("img_description", cardData.img_description);
      setValue("text", cardData.text);
      setValue("title", cardData.title);
    }

    if (croppedImg && croppedImg !== "") {
      setValue("img", croppedImg);
    }
  }, [croppedImg, cardData]);

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
      cardData.id !== ""
        ? await updateCard({
            img: cardData.img !== data.img ? data.img : undefined,
            id: cardData.id,
            title: data.title,
            img_description: data.img_description,
            text: data.text,
          })
        : await createCard(data);
      await toggleModal();
    } catch (error) {
      console.log(error);
      toast.error("Упс..., щось пішло не так!");
    }
  };

  return (
    <div>
      <div className={styles.heading_container}>
        <Breadcrumb items={items} />
        <Link href="/admin/cards" className={styles.backBtn}>
          Назад
        </Link>
      </div>
      <AdminWrapper size="bigWrapper">
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
          <AddImage
            setImage={setCroppedImg}
            title={"Додати зображення"}
            toggleSuccessModal={toggleSuccessModal}
            aspect={16 / 9}
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
          {successModal && (
            <Modal isModalOpen={successModal} toggleModal={toggleSuccessModal}>
              <ConfirmationModal message="Зображення успішно додано" />
            </Modal>
          )}
        </form>
      </AdminWrapper>
    </div>
  );
};

export default AdminCardAdd;
