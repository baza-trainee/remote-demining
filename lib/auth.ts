import axios from "axios";

axios.defaults.baseURL = "https://remote-demining.onrender.com";

const loginUser = async (email: string, password: string) => {
  try {
    const { data } = await axios.post("/auth/login", { email, password });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default loginUser;
