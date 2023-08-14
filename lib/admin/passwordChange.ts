import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://remote-demining.onrender.com";

interface PasswordChangeData {
  _id: string;
  email: string;
  __v: number;
}


const passwordChange = async (
  password: string,
  confirmPassword: string
): Promise<PasswordChangeData> => {
  try {
    const token = JSON.parse(localStorage.getItem("token") || "");

    if (!token) {
      throw new Error("Internal error");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const { data } = await axios.post(
      "/auth/change-password",
      { password, confirmPassword },
      { headers }
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const response = error.response as AxiosResponse;
      if (response.status === 404) {
        throw new Error("User not found");
      }
    }
    console.error(error);
    throw new Error("Oh, something went wrong");
  }
};

export default passwordChange;
