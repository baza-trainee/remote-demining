"use client";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToggle } from "usehooks-ts";
import * as yup from "yup";
import axios from "axios";

import Button from "@/components/Button/Button";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import Modal from "@/components/Modal/Modal";
import PasswordInputToggle from "@/components/PasswordInputToggle/PasswordInputToggle";

import styles from "./PasswordReset.module.css";

interface PasswordResetProps {
  id: string;
  token: string;
}
interface PasswordResetValues {
  password: string;
  confirmPassword: string;
}

const validationScheme = yup.object({
  password: yup
    .string()
    .min(8, "Пароль має містити мінімум 8 символів")
    .max(14, "Пароль має містити максимум 14 символів")
    .required("Це поле не повинно бути пустим"),
  confirmPassword: yup
    .string()
    .min(8, "Пароль має містити мінімум 8 символів")
    .max(14, "Пароль має містити максимум 14 символів")
    .oneOf([yup.ref("password")], "Помилка валідації")
    .required("Це поле не повинно бути пустим"),
});

const PasswordReset: React.FC<PasswordResetProps> = ({ id, token }) => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<PasswordResetValues>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(validationScheme),
  });

  const sendPassword: SubmitHandler<PasswordResetValues> = async (data) => {
    try {
      await axios.post(
        `https://remote-demining.onrender.com/auth/forgot-password/${id}/${token}`,
        { password: data.password, confirmPassword: data.confirmPassword }
      );
      toggleModal();
      reset();
      router.push("/admin");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setError("password", {
            type: "custom",
            message: "Помилка валідації",
          });
        }
        if (error.response?.status === 500) {
          setError("password", {
            type: "custom",
            message: "Упс... щось пішло не так",
          });
        }
      }
      console.log(error);
    }
  };
  return (
    <>
      <form
        id="password-reset"
        className={styles.container}
        onSubmit={handleSubmit(sendPassword)}
      >
        <div className={styles.input_container}>
          <PasswordInputToggle
            {...register("password")}
            label="Введіть новий пароль*"
            errorMessage={errors.password?.message}
            error={errors.password}
            isNoPlaceholder
          ></PasswordInputToggle>
          <PasswordInputToggle
            {...register("confirmPassword")}
            label="Підтвердіть новий пароль*"
            errorMessage={errors.confirmPassword?.message}
            error={errors.confirmPassword}
            isNoPlaceholder
          ></PasswordInputToggle>
        </div>
        <Button isFullWidth type="submit">
          Підтвердити
        </Button>
      </form>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} toggleModal={toggleModal}>
          <ConfirmationModal message="Пароль успішно змінено" />
        </Modal>
      )}
    </>
  );
};
export default PasswordReset;
