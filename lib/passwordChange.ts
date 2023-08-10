import axios, { AxiosResponse, AxiosError } from "axios";

axios.defaults.baseURL = "https://remote-demining.onrender.com";

interface PasswordChangeData {
  access_token: string;
  user: {
    email: string;
  };
}

const passwordChange = async (
  oldPassword: string,
  newPassword: string,
  confirmPassword: string
): Promise<PasswordChangeData> => {
  try {
    const { data } = await axios.post("/auth/change-password", {
      oldPassword,
      newPassword,
      confirmPassword,
    });
    return data;
  } catch (error: AxiosError) {
  if (error.response) {
    const { status } = error.response;
    if (status === 404) {
      throw new Error("User not found");
    }
  }
};

export default passwordChange;
