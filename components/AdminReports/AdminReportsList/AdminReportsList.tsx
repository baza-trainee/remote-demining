"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useToggle } from "usehooks-ts";

import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import Modal from "@/components/Modal/Modal";
import { deleteReport, getReports, ReportsInDTO } from "@/lib/admin/content";
import { openReportInNewWindow } from "@/lib/utils/openReportInNewWindow";
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
  const router = useRouter();

  const fetchReportsData = async () => {
    try {
      setIsLoading();
      const data = await getReports();
      data && setReportData(data);
      setIsLoading();
    } catch (e) {
      setIsLoading();
      console.error(e);
      toast.error("Упс..., щось пішло не так!");
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

  const handleAddReport = () => {
    if (reportData.length > 0) {
      toast.warning("Можна додати лише одну звітність.");
    } else {
      router.push(`/admin/reports/edit`);
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Завантажується...</p>
      ) : (
        <div className={styles.container}>
          <div
            className={`${styles.download_container} ${
              selectedReport && styles.selected_report
            }`}
          >
            <p
              className={`${styles.download_container_text} ${
                selectedReport && styles.selected_report_text
              }`}
            >
              {!selectedReport ? "Оберіть звітність" : selectedReport.data.name}
            </p>
            {reportData.length > 0 && (
              <ul className={styles.dropdown_content}>
                {reportData?.map((report) => (
                  <li
                    key={report._id}
                    onClick={() => handleReportSelect(report)}
                    className={styles.dropdown_item}
                  >
                    {report.data.name}
                  </li>
                ))}
              </ul>
            )}
            {selectedReport ? (
              <a onClick={() => openReportInNewWindow(reportData[0])}>
                <Image
                  className={styles.icon}
                  src={download}
                  width={24}
                  height={24}
                  alt="Іконка завантаження"
                />
              </a>
            ) : (
              <Image
                className={styles.icon}
                src={download}
                width={24}
                height={24}
                alt="Іконка завантаження"
              />
            )}
          </div>
          <div className={styles.edit_delete_container}>
            <div className={styles.add_container} onClick={handleAddReport}>
              <Image src={addImg} width={24} height={24} alt="Знак плюс" />
              <p className={styles.add_text}>Додати звітність</p>
            </div>
            <div className={styles.delete_container}>
              <Image src={pencil} alt="Олівець" width={27} height={27} />
              <button
                className={styles.trash}
                onClick={() =>
                  selectedReport
                    ? toggleDelModal()
                    : toast.warning("Оберіть звітність!")
                }
              >
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
