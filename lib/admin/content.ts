import axios, { AxiosResponse } from "axios";

import { ContactsFormValues } from "@/components/AdminContactsPage/AdminContactsPage";
import { AdminNewsValues } from "@/components/AdminNewsPage/AdminNewsPage";

axios.defaults.baseURL = "https://remote-demining.onrender.com";

/*
  |==============================
  | Contacts
  |==============================
*/

export interface ContactsData {
  images: [string];
  data: {
    section: string;
    email: string;
    phone: string;
  };
  dataSchema: {
    section: string;
    email: string;
    phone: string;
  };
  _id: string;
}

const getContacts = async (): Promise<ContactsData[] | undefined> => {
  try {
    const response: AxiosResponse<ContactsData[]> = await axios.get(
      `content/?data={"section":"contacts"}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateContacts = async (contact: ContactsFormValues): Promise<void> => {
  try {
    await axios.patch(`content/${contact.id}`, {
      images: [],
      data: {
        section: "contacts",
        email: contact.email,
        phone: contact.phone,
      },
      dataSchema: {
        section: "string",
        email: "string",
        phone: "string",
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
    id: string;
    title: string;
    img_description: string;
    text: string;
    link: string;
    date: string;
  };
  dataSchema: {
    section: string;
    id: string;
    title: string;
    img_description: string;
    text: string;
    link: string;
    date: string;
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
        img_description: news.img_description,
        text: news.text,
        link: news.link,
        date: news.date,
      },
      dataSchema: {
        section: "string",
        id: "string",
        title: "string",
        img_description: "string",
        text: "string",
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

const updateNews = async (news: AdminNewsValues): Promise<void> => {
  try {
    const payload: {
      data: {
        section: string;
        title: string;
        img_description: string;
        text: string;
        link: string;
        date: string;
      };
      dataSchema: {
        section: string;
        title: string;
        img_description: string;
        text: string;
        link: string;
        date: string;
      };
      images?: string[];
    } = {
      data: {
        section: "news",
        title: news.title,
        img_description: news.img_description,
        text: news.text,
        link: news.link,
        date: news.date,
      },
      dataSchema: {
        section: "string",
        title: "string",
        img_description: "string",
        text: "string",
        link: "string",
        date: "string",
      },
    };

    if (news.image) {
      payload.images = [news.image];
    }

    await axios.patch(`content/${news.id}`, payload);
  } catch (error) {
    throw error;
  }
};

const getNewsById = async (id: string): Promise<NewsItem> => {
  try {
    const { data }: AxiosResponse<NewsItem> = await axios.get(`content/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export {
  createNews,
  deleteNews,
  getContacts,
  getNews,
  getNewsById,
  updateContacts,
  updateNews,
};
