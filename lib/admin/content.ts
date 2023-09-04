import axios, { AxiosResponse } from "axios";

import { ContactsFormValues } from "@/components/AdminContactsPage/AdminContactsPage";
import { AdminNewsValues } from "@/components/AdminNewsPage/AdminNewsPage";
import { ReportsI } from "@/components/AdminReports/AdminReportsAdd/AdminReportsAdd";

import api from "../api/baseQuery";

axios.defaults.baseURL = "https://remote-demining.onrender.com/";

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
      `content?data={"section":"contacts"}`
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
      `content?data={"section":"news"}`
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

/*
  |==============================
  | Logos
  |==============================
*/
interface Data {
  section: string;
  img_description: string;
}

export interface LogosInDTO {
  _id: string;
  images: string[];
  data: Data;
}

export const getLogos = async (): Promise<LogosInDTO[]> => {
  try {
    const { data } = await api.get(
      "/content?data={%22section%22:%22logosImg%22}"
    );
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

/*
  |==============================
  | Reports
  |==============================
*/

export interface ReportsInDTO {
  data: { section: string; report: string; name: string };
  dataSchema: {
    section: string;
    report: string;
    name: string;
  };
  _id: string;
}

export const getReports = async (): Promise<ReportsInDTO[] | undefined> => {
  try {
    const response: AxiosResponse<ReportsInDTO[]> = await axios.get(
      `content?data={"section":"reports"}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createReports = async (
  base64Data: string,
  reportName: string
): Promise<void> => {
  try {
    await axios.post("content", {
      data: {
        section: "reports",
        report: base64Data,
        name: reportName,
      },
      dataSchema: {
        section: "string",
        report: "string",
        name: "string",
      },
    });
  } catch (error) {
    throw error;
  }
};

export const deleteReport = async (id: string): Promise<void> => {
  try {
    await axios.delete(`content/${id}`);
  } catch (error) {
    throw error;
  }
};
