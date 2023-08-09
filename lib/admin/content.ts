import axios from "axios";

axios.defaults.baseURL = "https://remote-demining.onrender.com";

const getContacts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const contactData = {
    email: "example@example.com",
    phone: "+1234567890",
  };

  return contactData;
};

export default getContacts;
