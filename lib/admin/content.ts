import axios, { AxiosResponse } from "axios";

import { AdminNewsValues } from "@/components/AdminNewsPage/AdminNewsPage";

axios.defaults.baseURL = "https://remote-demining.onrender.com";

/*
  |==============================
  | Contacts
  |==============================
*/

interface Contact {
  email: string;
  phone: string;
}

const getContacts = async (): Promise<Contact> => {
  try {
    const response: AxiosResponse<{ data: { contacts: Contact } }> =
      await axios.get("/content/64d294bb71409c547cf883c1");
    const { contacts } = response.data.data;
    return contacts;
  } catch (error) {
    throw error;
  }
};

const updateContacts = async (updatedContacts: Contact) => {
  try {
    await axios.patch("/content/64d294bb71409c547cf883c1", {
      data: {
        contacts: updatedContacts,
      },
    });
  } catch (error) {
    throw error;
  }
};

/*
  |==============================
  | News
  |==============================
*/

export interface NewsItem {
  images: [string];
  data: {
    section: string;
    id: number;
    title: string;
    description: string;
    link: string;
    date: string;
  };
  dataSchema: {
    section: string;
    id: number;
    title: string;
    description: string;
    link: string;
  };
  _id: string;
}

const getNews = async (): Promise<NewsItem[]> => {
  try {
    const { data }: AxiosResponse<NewsItem[]> = await axios.get(
      `content/?data={"section":"news"}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

const createNews = async (news: AdminNewsValues): Promise<void> => {
  try {
    await axios.post("content", {
      images: news.image,
      data: {
        section: "news",
        id: news.id,
        title: news.title,
        description: news.description,
        link: news.link,
        date: news.date,
      },
      dataSchema: {
        section: "string",
        id: "number",
        title: "string",
        description: "string",
        link: "string",
        date: "string",
      },
    });
  } catch (error) {
    throw error;
  }
};

const deleteNews = async (id: string): Promise<void> => {
  try {
    await axios.delete(`content/${id}`);
  } catch (error) {
    throw error;
  }
};

export { createNews, deleteNews, getContacts, getNews, updateContacts };
