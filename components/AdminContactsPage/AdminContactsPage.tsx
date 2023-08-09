"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import getContacts from "@/lib/admin/content";

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
  const [contactData, setContactData] = useState<ContactsFormValues | null>(
    null
  );

  useEffect(() => {
    if (!isEditing) {
      fetchContactData();
    }
  }, [isEditing]);

  const fetchContactData = async () => {
    try {
      const data = await getContacts();
      setContactData(data);
    } catch (error) {
      console.log(error);
    }
  };

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
        <span className={isEditing ? styles.breadcrumb : undefined}>
          Контакти
        </span>{" "}
        {isEditing && <span className={styles.breadcrumb}>&gt;</span>}
        {isEditing && <span className={styles.edit}>Редагувати</span>}
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
              value={isEditing ? undefined : contactData?.phone || ""}
              defaultValue={isEditing ? contactData?.phone || "" : undefined}
              readOnly={!isEditing}
              errorMessage={errors.phone?.message}
              error={errors.phone}
              {...register("phone")}
            />

            <AdminEditContactsInput
              label="Електронна пошта"
              type="email"
              editable={isEditing}
              value={isEditing ? undefined : contactData?.email || ""}
              defaultValue={isEditing ? contactData?.email || "" : undefined}
              readOnly={!isEditing}
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
