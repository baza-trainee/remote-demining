import axios, { AxiosResponse } from "axios";

interface Contact {
  email: string;
  phone: string;
}

axios.defaults.baseURL = "https://remote-demining.onrender.com";

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

export { getContacts, updateContacts };
