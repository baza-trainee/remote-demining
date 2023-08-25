"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useToggle } from "usehooks-ts";

import Button from "@/components/Button/Button";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import Modal from "@/components/Modal/Modal";
import NavLink from "@/components/NavLink/NavLink";
import { deleteNews } from "@/lib/admin/content";
import add_icon from "@/public/images/icons/buttons/add.svg";

import { AdminNewsValues } from "../AdminNewsPage";

import styles from "./AdminNewsList.module.css";

interface AdminNewsListProps {
  newsData?: AdminNewsValues[];
  handleEditNews: ({}: AdminNewsValues) => void;
  onDelete: () => void;
}

const AdminNewsList: React.FC<AdminNewsListProps> = ({
  newsData,
  handleEditNews,
  onDelete,
}) => {
  const [confDelModal, toggleDelModal] = useToggle(false);
  const [successModal, toggleSuccessModal] = useToggle(false);
  const [newsId, setNewsId] = useState("");
  const [isLoading, setIsLoading] = useToggle(false);

  const handleDeleteNews = async (newsId: string) => {
    try {
      setIsLoading();
      await deleteNews(newsId);
      setNewsId("");
      setIsLoading();
      toggleDelModal();
      toggleSuccessModal();
      onDelete();
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
          <ul className={styles.list}>
            {newsData &&
              newsData.map(
                ({ id, image, title, img_description, text, link, date }) => (
                  <li key={id} className={styles.item}>
                    <div
                      className={styles.card}
                      onClick={() => {
                        handleEditNews({
                          id,
                          image,
                          title,
                          img_description,
                          text,
                          link,
                          date,
                        });
                      }}
                    >
                      <Image
                        src={`https://remote-demining.onrender.com/images/${image}`}
                        className={styles.image}
                        alt={img_description}
                        width={310}
                        height={170}
                        priority
                      />

                      <div className={styles.body}>
                        <div className={styles.content}>
                          <h3 className={styles.title}>{title}</h3>
                          <p className={styles.text}>{text}</p>
                        </div>
                        <div className={styles.moreInfoWrapper}>
                          <NavLink
                            href={link}
                            isFullWidth
                            isMoreInfo
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Детальніше
                          </NavLink>
                          <div className={styles.date}>
                            <p>{date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.btn_container}>
                      <Button
                        isFullWidth
                        outlined
                        className={styles.deleteBtn}
                        onClick={() => {
                          setNewsId(id);
                          toggleDelModal();
                        }}
                      >
                        Видалити
                      </Button>
                    </div>
                  </li>
                )
              )}
            <li className={styles.add_card}>
              <Link href="/admin/news/edit">
                <div className={styles.add_btn}>
                  <Image
                    src={add_icon}
                    width={50}
                    height={51}
                    alt={"add icon"}
                  />
                  <span>Додати</span>
                </div>
              </Link>
            </li>
            <li className={styles.last_card}></li>
          </ul>
          {confDelModal && (
            <Modal
              isModalOpen={confDelModal}
              toggleModal={() => toggleDelModal()}
            >
              <ConfirmationModal
                message="Ви дійсно бажаєте видалити картку?"
                approveChanges={() => handleDeleteNews(newsId)}
                discardChanges={() => toggleDelModal()}
              />
            </Modal>
          )}
          {successModal && (
            <Modal
              isModalOpen={successModal}
              toggleModal={() => toggleSuccessModal()}
            >
              <ConfirmationModal message="Новину успішно видалено" />
            </Modal>
          )}
        </div>
      )}
    </>
  );
};

export default AdminNewsList;
