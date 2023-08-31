import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToggle } from "usehooks-ts";
import axios from "axios";

import AdminEditContactsInput from "@/components/AdminEditContactsForm/AdminEditContactsInput";
import AdminWrapper from "@/components/AdminWrapper/AdminWrapper";
import Breadcrumb, { CrumbItem } from "@/components/Breadcrumb/Breadcrumb";
import Button from "@/components/Button/Button";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import Modal from "@/components/Modal/Modal";
import { updateContacts } from "@/lib/admin/content";

import { ContactsFormValues } from "../AdminContactsPage";
import validationSchema from "../validationSchema";

import styles from "../AdminContactsPage.module.css";

interface EditableContactsFormProps {
  contactData: ContactsFormValues;
  onSave: () => void;
}

const items: CrumbItem[] = [
  { label: "Контакти", path: "/admin/contacts" },
  { label: "Редагувати", path: "/admin/contacts/edit" },
];

const AdminEditContacts: React.FC<EditableContactsFormProps> = ({
  contactData,
  onSave,
}) => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<ContactsFormValues>({
    defaultValues: {
      email: contactData.email,
      phone: contactData.phone,
    },
    resolver: yupResolver(validationSchema) as any,
  });

  useEffect(() => {
    if (contactData) {
      setValue("phone", contactData.phone);
      setValue("email", contactData.email);
    }
  }, [contactData]);

  const onSubmit = async (data: ContactsFormValues) => {
    try {
      setIsLoading(true);
      const updatedContact = {
        id: contactData.id,
        email: data.email,
        phone: data.phone,
      };

      await updateContacts(updatedContact);
      setIsLoading(false);
      toggleModal();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          setError("phone", {
            type: "custom",
            message: "Невалідний формат",
          });
          setError("email", {
            type: "custom",
            message: "Невалідний формат пошти",
          });
        }
        if (error.response?.status === 500) {
          setError("phone", {
            type: "custom",
            message: "Упс..., щось пішло не так",
          });
          setError("email", {
            type: "custom",
            message: "Упс..., щось пішло не так",
          });
        }
        setValue("phone", "");
        setValue("email", "");
      }
    }
  };

  const closeModal = () => {
    toggleModal();
    onSave();
  };

  return (
    <div>
      <div className={styles.heading_container}>
        <Breadcrumb items={items} />
      </div>
      <AdminWrapper size="bigWrapper">
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
            <Button width="291" height="64" type="submit" disabled={isLoading}>
              {isLoading ? "Завантажується…" : "Надіслати"}
            </Button>
          </div>
          {isModalOpen && (
            <Modal isModalOpen={isModalOpen} toggleModal={closeModal}>
              <ConfirmationModal message="Контакти були успішно відредаговані!" />
            </Modal>
          )}
        </form>
      </AdminWrapper>
    </div>
  );
};

export default AdminEditContacts;
