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
import { createSlider, updateSlider } from "@/lib/admin/slider";

import { AdminSliderData } from "../AdminSlider";
import validationSchema from "../validationSchema";

import styles from "./AdminSliderAdd.module.css";

type AdminSlider = Omit<AdminSliderData, "id">;

interface AdminSliderAddProps {
  sliderData: AdminSliderData;
}

const items: CrumbItem[] = [
  { label: "Слайдер", path: "/admin/slider" },
  { label: "Додати cлайдер", path: "/admin/slider/edit" },
];

const AdminSliderAdd: React.FC<AdminSliderAddProps> = ({ sliderData }) => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [successModal, toggleSuccessModal] = useToggle(false);
  const [croppedImg, setCroppedImg] = useState<string | null>(null);
  const router = useRouter();
  const closeModal = () => {
    toggleModal();
    router.push(`/admin/slider`);
  };

  useEffect(() => {
    // console.log(sliderData);
    if (sliderData) {
      setValue("img", sliderData.img || "");
      setValue("text", sliderData.text);
      setValue("title", sliderData.title);
    }

    if (croppedImg && croppedImg !== "") {
      setValue("img", croppedImg);
    }
  }, [croppedImg, sliderData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      img: sliderData.img || "",
      title: sliderData.title,
      text: sliderData.text,
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<AdminSlider> = async (data) => {
    // console.log(data);
    try {
      sliderData.id !== ""
        ? await updateSlider({
            img: sliderData.img !== data.img ? data.img : undefined,
            id: sliderData.id,
            title: data.title,
            text: data.text,
          })
        : await createSlider(data);
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
        <Link href="/admin/slider" className={styles.backBtn}>
          Назад
        </Link>
      </div>
      <AdminWrapper size="bigWrapper">
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
          <AddImage
            setImage={setCroppedImg}
            title={"Додати картинку для слайдера"}
            toggleSuccessModal={toggleSuccessModal}
            aspect={31 / 17}
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
                  sliderData.id === ""
                    ? "Картку успішно додано"
                    : "Картку успішно оновлено"
                }
              />
            </Modal>
          )}
          {successModal && (
            <Modal isModalOpen={successModal} toggleModal={toggleSuccessModal}>
              <ConfirmationModal message="Картику для слайдеру успішно додано" />
            </Modal>
          )}
        </form>
      </AdminWrapper>
    </div>
  );
};

export default AdminSliderAdd;
