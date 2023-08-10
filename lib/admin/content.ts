import axios, { AxiosResponse } from "axios";

/* To delete */
import news1 from "../../public/images/news/news1.png";
import news3 from "../../public/images/news/news2.png";
import news2 from "../../public/images/news/news3.png";

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
  id: string;
  image: string;
  title: string;
  text: string;
  link: string;
  date: string;
}

const getNews = async (): Promise<NewsItem[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const fakeNews: NewsItem[] = [
      {
        id: "1",
        image: news1.src,
        title:
          "Ukraine is now the most mined country. It will take decades to make safe. — The Washington Post.",
        text: "In a year and a half of conflict, land mines — along with unexploded bombs, artillery shells and other...",
        link: "https://www.washingtonpost.com/world/2023/07/22/ukraine-is-now-most-mined-country...",
        date: "22 липня 2023",
      },
      {
        id: "2",
        image: news2.src,
        title:
          "Установи НАН України візьмуть участь у форумі «Безпека критичної інфраструктури та гуманітарна протимінна діяльність»",
        text: "Науковці Академії продемонструють свої  розр...",
        link: "https://www.nas.gov.ua/UA/Messages/Pages/View.aspx?MessageID=10076",
        date: "12 травня 2023",
      },
      {
        id: "3",
        image: news3.src,
        title:
          "Науковці НАН України представили свої розробки на форумі «Безпека критичної інфраструктури та гуманітарна протимінна діяльність»",
        text: "Захід відбувся 17 травня 2023 року в Києві...",
        link: "https://www.nas.gov.ua/UA/Messages/Pages/View.aspx?MessageID=10151",
        date: "25 травня 2023",
      },
    ];

    return fakeNews;
  } catch (error) {
    throw error;
  }
};

export { getContacts, getNews, updateContacts };
