import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToggle } from "usehooks-ts";

import AddButton from "@/components/AddButton/AddButton";
import AdminEditContactsInput from "@/components/AdminEditContactsForm/AdminEditContactsInput";
import Button from "@/components/Button/Button";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import AddImage from "@/components/Crop/AddImage";
import Modal from "@/components/Modal/Modal";

import { AdminCardsData } from "../AdminCards";

import styles from "./AdminCardAdd.module.css";

interface AdminCardAddProps {
  cardData: AdminCardsData;
  onSave: () => void;
}

const AdminCardAdd: React.FC<AdminCardAddProps> = ({ onSave, cardData }) => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const closeModal = () => {
    toggleModal();
    onSave();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm({
    defaultValues: {
      title: cardData.title,
      img_description: cardData.img_description,
      text: cardData.text,
    },
    // resolver: yupResolver(),
  });

  return (
    <form className={styles.container}>
      <AddImage imgWidth={966} imgHeight={120} title={"Додати зображення"} />
      <div className={styles.input_container}>
        <AdminEditContactsInput placeholder={"Заголовок"} editable {...register("title")} />
        <AdminEditContactsInput placeholder={"Опис зображення"} editable {...register("img_description")} />
        <AdminEditContactsInput placeholder={"Опис пункту"} editable {...register("text")} />
      </div>
      <div className={styles.btn_add_container} onClick={(e) => {e.preventDefault()}}>
        <AddButton />
      </div>
      <div className={styles.btn_send_container}>
        <Button
          type="submit"
          onClick={() => {
            onSave();
          }}
        >
          Надіслати
        </Button>
      </div>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} toggleModal={closeModal}>
          <ConfirmationModal message="Контакти були успішно відредаговані!" />
        </Modal>
      )}
    </form>
  );
};

export default AdminCardAdd;
