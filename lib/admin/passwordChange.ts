import axios from "axios";

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
  } catch (error) {
    throw error;
    // if (error.response) {
    //   const { status } = error.response;
    //   if (status === 404) {
    //     throw new Error("User not found");
    //   }
    // }
    // console.log(error);
    // throw new Error("Oh, something went wrong");
  }
};

export default passwordChange;
