"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToggle } from "usehooks-ts";

import AdminWrapper from "@/components/AdminWrapper/AdminWrapper";
import Breadcrumb, { CrumbItem } from "@/components/Breadcrumb/Breadcrumb";
import Button from "@/components/Button/Button";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import Modal from "@/components/Modal/Modal";
import { createReports } from "@/lib/admin/content";
import download from "@/public/images/icons/admin/download.svg";

import reportsValidate from "./reportsValidate";

import styles from "./AdminReportsAdd.module.css";

const items: CrumbItem[] = [
  { label: "Звітність", path: "/admin/reports" },
  { label: "Додати звітність", path: "/admin/reports/edit" },
];

export interface ReportsI {
  report: File | null;
}

const AdminReportsAdd = () => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [isLoading, setIsLoading] = useToggle(false);
  const router = useRouter();
  const [successModal, toggleSuccessModal] = useToggle(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ReportsI>({
    defaultValues: {
      report: null,
    },
    resolver: yupResolver(reportsValidate) as any,
  });

  const report = watch("report");

  useEffect(() => {
    if (report) {
      toggleSuccessModal();
    }
  }, [report]);

  const onSubmit = async (data: any) => {
    const file = data.report?.[0];
    const fileName = file.name;
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        if (typeof event.target?.result === "string") {
          const base64Data = event.target.result.split(",")[1];
          try {
            setIsLoading();
            await createReports(base64Data, fileName);
            setIsLoading();
            toggleModal();
          } catch (error) {
            setIsLoading();
            console.log(error);
            toast.error("Упс..., щось пішло не так!");
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const closeModal = () => {
    toggleModal();
    router.push(`/admin/reports`);
  };

  return (
    <div>
      <div className={styles.heading_container}>
        <Breadcrumb items={items} />
      </div>
      <AdminWrapper size="bigWrapper">
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
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Завантажується…" : "Надіслати"}
            </Button>
          </div>
        </form>
      </AdminWrapper>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} toggleModal={closeModal}>
          <ConfirmationModal message="Звітність успішно додано" />
        </Modal>
      )}
      {successModal && (
        <Modal isModalOpen={successModal} toggleModal={toggleSuccessModal}>
          <ConfirmationModal message="Документ завантажено" />
        </Modal>
      )}
    </div>
  );
};

export default AdminReportsAdd;
