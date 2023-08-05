"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import loginUser from "@/lib/auth";

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

// a custom interface for the error object
interface AxiosError extends Error {
  response: {
    data: {
      message: string;
    };
  };
}

const AdminLoginPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [backendErrors, setBackendErrors] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
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
        setBackendErrors(null);
        await loginUser(login, password);
        setIsLoading(false);
        router.push("/admin/news");
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        if (
          (error as AxiosError).response?.data.message ===
            "HttpException: Unvalid user data" ||
          (error as AxiosError).response?.data.message ===
            "TypeError: Cannot read properties of null (reading 'password')"
        ) {
          setBackendErrors("Помилка валідації");
        }
        reset();
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
            <div>
              <AutorizationInput
                label="Логін"
                type="text"
                placeholder="Введіть логін"
                errorMessage={errors.login?.message}
                error={errors.login}
                {...register("login")}
              />
              {backendErrors && (
                <p className={styles.backendError}>{backendErrors}</p>
              )}
            </div>
            <div>
              <PasswordInputToggle
                errorMessage={errors.password?.message}
                error={errors.password}
                {...register("password")}
              />
              {backendErrors && (
                <span className={styles.backendError}>{backendErrors}</span>
              )}
            </div>
          </div>
          <Link href={"#"} className={styles.link}>
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
