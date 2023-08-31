import { AxiosResponse } from "axios";

import { AdminCardsData } from "@/components/AdminCards/AdminCards";

import api from "../api/baseQuery";
import { AdminCard } from "../types/adminCard";
import { ProjectsCardsData } from "../types/ProjectsCardDataType";

const getCards = async (): Promise<ProjectsCardsData[] | undefined> => {
  try {
    const response: AxiosResponse<ProjectsCardsData[]> = await api.get(
      `content/?data={"section":"cards"}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createCard = async (card: AdminCard): Promise<void> => {
  try {
    await api.post("content", {
      images: card.img,
      data: {
        section: "cards",
        title: card.title,
        text: card.text,
        img_description: card.img_description,
      },
      dataSchema: {
        section: "string",
        title: "string",
        text: "string",
        img_description: "string",
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteCard = async (id: string): Promise<void> => {
  try {
    await api.delete(`content/${id}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateCard = async (card: AdminCardsData): Promise<void> => {
  console.log(card)
  try {
    await api.patch(`content/${card.id}`, {
      images: card.img ? [card.img] : undefined,
      data: {
        section: "cards",
        title: card.title,
        text: card.text,
        img_description: card.img_description,
      },
      dataSchema: {
        section: "string",
        title: "string",
        text: "string",
        img_description: "string",
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCardById = async (id: string): Promise<ProjectsCardsData> => {
  try {
    const { data }: AxiosResponse<ProjectsCardsData> = await api.get(
      `content/${id}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export { createCard, deleteCard, getCardById, getCards, updateCard };
