"use client"

import router, { useRouter } from "next/router"; 
import { FC } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import passwordChange from "@/lib/passwordChange";

import AdminWrapper from "../AdminWrapper/AdminWrapper";
import AutorizationInput from "../AutorizationInput/AutorizationInput";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import validationSchema from './validation';

import styles from './AdminPasswordChangePage.module.css';

interface PasswordChangeFormValues {
  oldPassword: string; 
  newPassword: string;
  confirmPassword: string;
}

const AdminPasswordChangePage: FC = () => {

   const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const { register, handleSubmit, formState: { errors, isValid }, reset, setError } = useForm<PasswordChangeFormValues>({
  defaultValues: {
    oldPassword: "", 
    newPassword: "",
    confirmPassword: "",
  },
  resolver: yupResolver(validationSchema),
});

  const onSubmit = async ({ oldPassword, newPassword, confirmPassword }: PasswordChangeFormValues) => {
    if (isValid) {
      try {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!-_)(.,])[A-Za-z0-9!-_)(.,]{14,}$/;
        if (!passwordRegex.test(newPassword)) {
          setError("newPassword", {
            type: "manual",
            message: "Новий пароль може використовувати великі і маленькі літери латинського алфавіту, спеціальні знаки типу !-_)(., та цифри від 0 до 9",
          });
          return;
        }

        await passwordChange(oldPassword, newPassword, confirmPassword);
        router.push("/admin/");
        setIsSuccessModalOpen(true);
      } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.request?.status === 500) {
          setError("oldPassword", {
            type: "custom",
            message: "Помилка валідації",
          });
          setError("newPassword", {
            type: "custom", 
            message: "Помилка валідації",
          });
          setError("confirmPassword", {
            type: "custom",
            message: "Помилка валідації",
          });
        }
      }
      }
    }
  };

  return (
    <section className={styles.section}>
      <AdminWrapper size="smallWrapper" classname={styles.wrapper}>
        <h3 className={styles.heading}>Змінити пароль</h3>
        <form
          className={styles.form}
          id="password-change-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={styles.inputWrapper}>
            <AutorizationInput
              label="Введіть старий пароль*"
              type="password"
              errorMessage={errors.oldPassword?.message}
              error={errors.oldPassword}
              {...register("oldPassword")}
            />
            <AutorizationInput
              label="Введіть новий пароль*"
              type="password"
              errorMessage={errors.newPassword?.message}
              error={errors.newPassword}
              {...register("newPassword")}
            />
            <AutorizationInput
              label="ПідтвердІть новий пароль*"
              type="password"
              errorMessage={errors.confirmPassword?.message}
              error={errors.confirmPassword}
              {...register("confirmPassword")}
            />
          </div>
          <Button isFullWidth type="submit">
            Надіслати
          </Button>
        </form>
      </AdminWrapper>
      {isSuccessModalOpen && (
        <Modal toggleModal={() => setIsSuccessModalOpen(false)} isModalOpen={isSuccessModalOpen}>
          <p>Пароль успішно змінено.</p>
        </Modal>
      )}
    </section>
  );
};

export default AdminPasswordChangePage;
