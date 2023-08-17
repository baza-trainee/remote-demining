import { AxiosResponse } from "axios";

import { AdminCardsData } from "@/components/AdminCards/AdminCards";

import api from "../api/baseQuery";

interface CardsData {
  images: [string];
  data: {
    section: string;
    id: number;
    title: string;
    text: string;
    img_description: string;
  };
  dataSchema: {
    section: string;
    id: number;
    title: string;
    text: string;
    img_description: string;
  };
  _id: string;
}

const getCards = async (): Promise<CardsData[] | undefined> => {
  try {
    const response: AxiosResponse<CardsData[]> = await api.get(
      `content/?data={"section":"cards"}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createCard = async (card: AdminCardsData): Promise<void> => {
  try {
    await api.post("content", {
      images: card.img,
      data: {
        section: "cards",
        id: card.id,
        title: card.title,
        text: card.text,
        img_description: card.img_description,
      },
      dataSchema: {
        section: "string",
        id: "number",
        title: "string",
        text: "string",
        img_description: "string",
      },
    });
  } catch (error) {
    console.log(error);
  }
};


export { createCard,getCards };
