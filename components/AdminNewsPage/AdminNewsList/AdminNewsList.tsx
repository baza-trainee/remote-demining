"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useToggle } from "usehooks-ts";

import Button from "@/components/Button/Button";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import Modal from "@/components/Modal/Modal";
import NavLink from "@/components/NavLink/NavLink";
import { getNews, NewsItem } from "@/lib/admin/content";
import add_icon from "@/public/images/icons/buttons/add.svg";

import { AdminNewsValues } from "../AdminNewsPage";

import styles from "./AdminNewsList.module.css";

interface AdminNewsListProps {
  newsData?: AdminNewsValues[];
  handleEditNews: ({}: AdminNewsValues) => void;
  handleDeleteNews: (id: string) => void;
}

const AdminNewsList: React.FC<AdminNewsListProps> = ({
  newsData,
  handleEditNews,
  handleDeleteNews,
}) => {
  const [confDelModal, toggleDelModal] = useToggle(false);
  const [successModal, toggleSuccessModal] = useToggle(false);
  const [newsId, setNewsId] = useState("");
  const deleteNews = () => {
    handleDeleteNews(newsId);
    setNewsId("");
    toggleDelModal();
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {newsData &&
          newsData.map(({ id, image, title, description, link, date }) => (
            <li key={id} className={styles.card}>
              <div
                onClick={() => {
                  handleEditNews({ id, image, title, description, link, date });
                }}
              >
                <a href={link} target="_blank" rel="noreferrer noopener">
                  <Image
                    src={image}
                    className={styles.image}
                    alt={title}
                    width={310}
                    height={170}
                  />
                </a>

                <div className={styles.body}>
                  <div className={styles.content}>
                    <a href={link} target="_blank" rel="noreferrer noopener">
                      <h3 className={styles.title}>{title}</h3>
                    </a>
                    <p className={styles.text}>{description}</p>
                  </div>
                  <div className={styles.moreInfoWrapper}>
                    <NavLink href={link} isFullWidth isMoreInfo>
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
          ))}
        <li className={styles.add_card}>
          <div
            className={styles.add_btn}
            onClick={() => {
              handleEditNews({
                id: "",
                image: "",
                title: "",
                description: "",
                link: "",
                date: "",
              });
            }}
          >
            <Image src={add_icon} width={50} height={51} alt={"add icon"} />
            <span>Додати</span>
          </div>
        </li>
        <li className={styles.last_card}></li>
      </ul>
      {confDelModal && (
        <Modal isModalOpen={confDelModal} toggleModal={() => toggleDelModal()}>
          <ConfirmationModal
            message="Ви дійсно бажаєте видалити картку?"
            approveChanges={() => deleteNews()}
            discardChanges={() => toggleDelModal()}
          />
        </Modal>
      )}
      {successModal && (
        <Modal
          isModalOpen={successModal}
          toggleModal={() => toggleSuccessModal()}
        >
          <ConfirmationModal message="Картку успішно додано" />
        </Modal>
      )}
    </div>
  );
};

export default AdminNewsList;
