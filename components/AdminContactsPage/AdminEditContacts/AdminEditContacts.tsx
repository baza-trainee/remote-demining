import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToggle } from "usehooks-ts";

import AdminEditContactsInput from "@/components/AdminEditContactsForm/AdminEditContactsInput";
import Button from "@/components/Button/Button";

import { ContactsFormValues } from "../AdminContactsPage";
import validationSchema from "../validationSchema";

import styles from "../AdminContactsPage.module.css";
import Modal from "@/components/Modal/Modal";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";

interface EditableContactsFormProps {
  contactData: ContactsFormValues;
  onSave: () => void;
}

const AdminEditContacts: React.FC<EditableContactsFormProps> = ({
  contactData,
  onSave,
}) => {
  const [isModalOpen, toggleModal] = useToggle(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactsFormValues>({
    defaultValues: {
      email: contactData.email,
      phone: contactData.phone,
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: ContactsFormValues) => {
    try {
      console.log(data);
      toggleModal();
      onSave();
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    toggleModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.inputWrapper}>
        <AdminEditContactsInput
          label="Телефони"
          type="tel"
          editable={true}
          error={errors.phone}
          errorMessage={errors.phone?.message}
          {...register("phone")}
        />

        <AdminEditContactsInput
          label="Електронна пошта"
          type="email"
          editable={true}
          error={errors.email}
          errorMessage={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className={styles.buttonWrapper}>
        <Button width="291" height="64" type="submit">
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

export default AdminEditContacts;
