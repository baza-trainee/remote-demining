"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useToggle } from "usehooks-ts";

import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import Modal from "@/components/Modal/Modal";
import { deleteReport, getReports, ReportsInDTO } from "@/lib/admin/content";
import addImg from "@/public/images/admin/add.svg";
import pencil from "@/public/images/adminInputs/pen.svg";
import download from "@/public/images/icons/admin/download.svg";
import trash from "@/public/images/icons/admin/trash.svg";

import styles from "./AdminReportsList.module.css";

const AdminReportsList = () => {
  const [selectedReport, setSelectedReport] = useState<ReportsInDTO | null>(
    null
  );
  const [reportData, setReportData] = useState<ReportsInDTO[]>([]);
  const [confDelModal, toggleDelModal] = useToggle(false);
  const [successModal, toggleSuccessModal] = useToggle(false);
  const [isLoading, setIsLoading] = useToggle(false);

  const fetchReportsData = async () => {
    try {
      const data = await getReports();
      data && setReportData(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchReportsData();
  }, []);

  const handleReportSelect = (report: ReportsInDTO) => {
    setSelectedReport(report);
  };

  const handleDeleteReport = async (reportId: string) => {
    try {
      setIsLoading();
      await deleteReport(reportId);
      setSelectedReport(null);
      setIsLoading();
      toggleDelModal();
      toggleSuccessModal();
      fetchReportsData();
    } catch (error) {
      console.error(error);
      toast.error("Упс..., щось пішло не так!");
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Завантажується...</p>
      ) : (
        <div className={styles.container}>
          <div className={styles.download_container}>
            <p
              className={`${styles.download_container_text} ${
                selectedReport && styles.selected_report_text
              }`}
            >
              {!selectedReport ? "Оберіть звітність" : selectedReport.data.name}
            </p>
            <div className={styles.dropdown_content}>
              {reportData?.map((report) => (
                <a
                  key={report._id}
                  onClick={() => handleReportSelect(report)}
                  className={styles.dropdown_item}
                  href={`data:application/pdf;base64,${report.data.report}`}
                  download={report.data.name}
                >
                  {report.data.name}
                </a>
              ))}
            </div>
            <Image
              className={styles.icon}
              src={download}
              width={24}
              height={24}
              alt="Іконка завантаження"
            />
          </div>
          <div className={styles.edit_delete_container}>
            <Link href="/admin/reports/edit" className={styles.add_container}>
              <Image src={addImg} width={24} height={24} alt="Знак плюс" />
              <p className={styles.add_text}>Додати звітність</p>
            </Link>
            <div
              className={styles.delete_container}
              onClick={() => selectedReport && toggleDelModal()}
            >
              <Image src={pencil} alt="Олівець" width={27} height={27} />
              <button className={styles.pencil}>
                <Image
                  src={trash}
                  alt="Декоративна корзина для сміття"
                  width={27}
                  height={27}
                />
              </button>
            </div>
          </div>
          {confDelModal && (
            <Modal
              isModalOpen={confDelModal}
              toggleModal={() => toggleDelModal()}
            >
              <ConfirmationModal
                message="Ви дійсно бажаєте видалити звітність?"
                approveChanges={() =>
                  selectedReport && handleDeleteReport(selectedReport?._id)
                }
                discardChanges={() => toggleDelModal()}
              />
            </Modal>
          )}
          {successModal && (
            <Modal
              isModalOpen={successModal}
              toggleModal={() => toggleSuccessModal()}
            >
              <ConfirmationModal message="Звітність успішно видалено" />
            </Modal>
          )}
        </div>
      )}
    </>
  );
};

export default AdminReportsList;
