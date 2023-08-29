"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getCards } from "@/lib/admin/cards";
import pen from "@/public/images/adminInputs/pen.svg";

import AdminWrapper from "../AdminWrapper/AdminWrapper";
import Breadcrumb, { CrumbItem } from "../Breadcrumb/Breadcrumb";

import AdminCardsList from "./AdminCardsList/AdminCardsList";

import styles from "./AdminCards.module.css";

export interface AdminCardsData {
  id: string;
  img?: string;
  title: string;
  text: string;
  img_description: string;
}

const items: CrumbItem[] = [{ label: "Картки", path: "/admin/cards" }];

const AdminCards = () => {
  const [cardsData, setCardsData] = useState<AdminCardsData[]>();
  const router = useRouter();
  useEffect(() => {
    fetchCardsData();
  }, []);

  const handleEditCard = (card: AdminCardsData) => {
    router.push(`/admin/cards/edit?id=${card.id}`);
  };
  const handleDeleteCard = async () => {
    try {
      await fetchCardsData();
    } catch (error) {
      console.log(error);
      toast.error("Упс..., щось пішло не так!");
    }
  };
  const fetchCardsData = async () => {
    try {
      const data = await getCards();
      const cardsData = data?.map((card): AdminCardsData => {
        return {
          id: card._id,
          img: card.images[0],
          title: card.data.title,
          text: card.data.text,
          img_description: card.data.img_description,
        };
      });
      setCardsData(cardsData);
    } catch (error) {
      console.log(error);
      toast.error("Упс..., щось пішло не так!");
    }
  };
  return (
    <div>
      <div className={styles.heading_container}>
        <Breadcrumb items={items} />
        <Image src={pen} alt="edit_img" width={27} height={27} />
      </div>
      <AdminWrapper size="bigWrapper">
        <AdminCardsList
          cardsData={cardsData}
          handleEditCard={handleEditCard}
          handleDeleteCard={handleDeleteCard}
        />
      </AdminWrapper>
    </div>
  );
};

export default AdminCards;
