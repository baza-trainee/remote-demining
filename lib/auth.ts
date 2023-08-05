import axios from "axios";

axios.defaults.baseURL = "https://remote-demining.onrender.com";

interface LoginData {
  access_token: string;
  user: {
    email: string;
  };
}

const loginUser = async (
  email: string,
  password: string
): Promise<LoginData> => {
  try {
    const { data } = await axios.post("/auth/login", { email, password });
    localStorage.setItem("token", JSON.stringify(data.access_token));
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default loginUser;
