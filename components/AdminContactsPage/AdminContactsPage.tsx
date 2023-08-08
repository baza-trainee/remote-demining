"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AdminEditContactsInput from "../AdminEditContactsForm/AdminEditContactsInput";
import AdminWrapper from "../AdminWrapper/AdminWrapper";
import Button from "../Button/Button";

import validationSchema from "./validationSchema";

import styles from "./AdminContactsPage.module.css";

interface ContactsFormValues {
  email: string;
  phone: string;
}

const AdminContactsPage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle Save button click
  const handleSave = () => {
    // Perform data validation and save logic here
    // Update the state or make API requests
    // Display modal with success message
    setIsEditing(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    setValue,
  } = useForm<ContactsFormValues>({
    defaultValues: {
      email: "",
      phone: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = ({ email, phone }: ContactsFormValues) => {
    console.log({ email, phone });
  };

  return (
    <div>
      <h1 className={styles.heading}>
        {isEditing ? "Контакти > Edit" : "Контакти"}
      </h1>
      <AdminWrapper size="bigWrapper">
        <form
          className={styles.form}
          id="contacts-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={styles.inputWrapper}>
            <AdminEditContactsInput
              label="Телефони"
              type="tel"
              editable={isEditing}
              errorMessage={errors.phone?.message}
              error={errors.phone}
              {...register("phone")}
            />

            <AdminEditContactsInput
              label="Електронна пошта"
              type="email"
              editable={isEditing}
              errorMessage={errors.email?.message}
              error={errors.email}
              {...register("email")}
            />
          </div>

          <div className={styles.buttonWrapper}>
            {isEditing ? (
              <Button
                width="291"
                height="64"
                onClick={handleSave}
                type="submit"
              >
                Надіслати
              </Button>
            ) : (
              <Button
                onClick={() => setIsEditing(true)}
                width="291"
                height="64"
              >
                Редагувати
              </Button>
            )}
          </div>
        </form>
      </AdminWrapper>
    </div>
  );
};

export default AdminContactsPage;
