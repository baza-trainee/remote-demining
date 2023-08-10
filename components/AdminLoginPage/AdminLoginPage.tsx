"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import loginUser from "@/lib/admin/auth";

import AdminWrapper from "../AdminWrapper/AdminWrapper";
import AutorizationInput from "../AutorizationInput/AutorizationInput";
import Button from "../Button/Button";
import PasswordInputToggle from "../PasswordInputToggle/PasswordInputToggle";

import validationSchema from "./validationSchema";

import styles from "./AdminLoginPage.module.css";

interface LoginFormValues {
  login: string;
  password: string;
}

const AdminLoginPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    setValue,
  } = useForm<LoginFormValues>({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async ({ login, password }: LoginFormValues) => {
    if (isValid) {
      try {
        setIsLoading(true);
        await loginUser(login, password);
        setIsLoading(false);
        router.push("/admin/news");
      } catch (error) {
        setIsLoading(false);
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 409) {
            setError("login", {
              type: "custom",
              message: "Пошта або пароль не існують",
            });
            setError("password", {
              type: "custom",
              message: "Пошта або пароль не існують",
            });
          }
          if (error.response?.status === 500) {
            setError("login", {
              type: "custom",
              message: "Упс... щось пішло не так",
            });
            setError("password", {
              type: "custom",
              message: "Упс..., щось пішло не так",
            });
          }
          setValue("login", "");
          setValue("password", "");
        }
      }
    }
  };

  return (
    <section className={styles.section}>
      <AdminWrapper size="smallWrapper" classname={styles.wrapper}>
        <h3 className={styles.heading}>Вхід</h3>
        <form
          className={styles.form}
          id="login-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={styles.inputWrapper}>
            <AutorizationInput
              label="Логін"
              type="text"
              placeholder="Введіть логін"
              errorMessage={errors.login?.message}
              error={errors.login}
              {...register("login")}
            />
            <PasswordInputToggle
              errorMessage={errors.password?.message}
              error={errors.password}
              {...register("password")}
            />
          </div>
          <Link href={"/admin/recover-password"} className={styles.link}>
            Забули пароль?
          </Link>
          <Button isFullWidth type="submit" disabled={isLoading}>
            {isLoading ? "Завантажується…" : "Вхід"}
          </Button>
        </form>
      </AdminWrapper>
    </section>
  );
};

export default AdminLoginPage;
