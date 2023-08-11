import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://remote-demining.onrender.com";

interface PasswordChangeData {
  access_token: string;
  user: {
    email: string;
  };
}

const passwordChange = async (
  newPassword: string,
  confirmPassword: string,
  token: string
): Promise<PasswordChangeData> => {
  try {
    const { data } = await axios.post(`/auth/change-password/${token}`, {
      newPassword,
      confirmPassword,
    });
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
