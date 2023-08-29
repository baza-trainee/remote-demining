"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import AdminCardAdd from "@/components/AdminCards/AdminCardAdd/AdminCardAdd";
import { AdminCardsData } from "@/components/AdminCards/AdminCards";
import { getCardById } from "@/lib/admin/cards";

function CardsAddPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [editedCard, setEditedCard] = useState<AdminCardsData>({
    id: "",
    img: "",
    title: "",
    text: "",
    img_description: "",
  });

  useEffect(() => {
    fetchCardData();
    console.log(editedCard)
  }, [id]);

  const fetchCardData = async () => {
    if (id) {
      try {
        const data = await getCardById(id);
        setEditedCard({
          id: data._id,
          img: data.images[0],
          title: data.data.title,
          text: data.data.text,
          img_description: data.data.img_description,
        });
      } catch (e) {
        toast.error("Упс..., щось пішло не так!");
        console.error(e);
      }
    }
  };

  return (
    <>
      <AdminCardAdd cardData={editedCard} />
    </>
  );
}
export default CardsAddPage;
