"use client";

import { FC, useCallback, useEffect, useState } from "react";
import { useToggle } from "usehooks-ts";

import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import Modal from "@/components/Modal/Modal";
import api from "@/lib/api/baseQuery";

import AddLogo from "../AddLogo/AddLogo";
import Logo from "../Logo/Logo";

import styles from "./Logos.module.css";

interface Data {
  section: string;
  img_description: string;
}

interface LogosInDTO {
  _id: string;
  images: string[];
  data: Data;
}

const Logos: FC = ({}) => {
  const [imgs, setImgs] = useState<LogosInDTO[]>([]);
  const [isModalOpen, toggleModal] = useToggle(false);
  const [deletionCount, setDeletionCount] = useState(0);
  const [imageId, setImageId] = useState("");

  const getLogos = async () => {
    try {
      const { data } = await api.get(
        "/content?data={%22section%22:%22logosImg%22}"
      );
      setImgs(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/content/${imageId}`);
      setDeletionCount((prevCount) => prevCount + 1);
      toggleModal();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getLogos();
  }, [deletionCount]);

  const closeModal = () => {
    toggleModal();
  };

  const handleCancel = () => {
    toggleModal();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logos}>
        {imgs?.map((el) => (
          <Logo
            setImageId={setImageId}
            key={el._id}
            id={el._id}
            img={el.images}
            description={el.data.img_description}
            toggleModal={toggleModal}
          />
        ))}
        <AddLogo />
      </div>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} toggleModal={closeModal}>
          <ConfirmationModal
            approveChanges={handleDelete}
            discardChanges={handleCancel}
            message="Ви дійсно бажаєте видалити лого? "
          />
        </Modal>
      )}
    </div>
  );
};

export default Logos;
