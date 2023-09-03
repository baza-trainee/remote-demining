"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AdminWrapper from "@/components/AdminWrapper/AdminWrapper";
import Breadcrumb, { CrumbItem } from "@/components/Breadcrumb/Breadcrumb";
import Button from "@/components/Button/Button";
import pencil from "@/public/images/adminInputs/pen.svg";
import download from "@/public/images/icons/admin/download.svg";
import trash from "@/public/images/icons/admin/trash.svg";

import reportsValidate from "./reportsValidate";

import styles from "./AdminReportsAdd.module.css";

const items: CrumbItem[] = [
  { label: "Звітність", path: "/admin/reports" },
  { label: "Додати звітність", path: "/admin/reports/edit" },
];

interface ReportsI {
  report: string | null;
}

const AdminReportsAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ReportsI>({
    defaultValues: {
      report: null,
    },
    resolver: yupResolver(reportsValidate) as any,
  });

  const onSubmit = (data: ReportsI) => {
    console.log(data);
  };

  return (
    <div>
      <div className={styles.heading_container}>
        <Breadcrumb items={items} />
      </div>
      <AdminWrapper size="bigWrapper">
        <div className={styles.delete_container}>
          <Image src={pencil} alt="Олівець" width={27} height={27} />
          <Image
            src={trash}
            alt="Декоративна корзина для сміття"
            width={27}
            height={27}
          />
        </div>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <label className={styles.wrapper} htmlFor="reports">
            <input
              className={styles.input}
              type="file"
              id="reports"
              accept=".pdf"
              {...register("report")}
            />
            <div>
              <Image
                className={styles.icon}
                src={download}
                width={24}
                height={24}
                alt="Іконка завантаження"
              />
              <span className={styles.title}>Завантажити документ</span>
            </div>
          </label>
          {errors.report && (
            <p className={styles.error}>{errors.report?.message}</p>
          )}
          <div className={styles.btn_send_container}>
            <Button type="submit">Надіслати</Button>
          </div>
        </form>
      </AdminWrapper>
    </div>
  );
};

export default AdminReportsAdd;
