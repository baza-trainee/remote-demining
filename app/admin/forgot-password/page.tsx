"use client";
import { useEffect, useState } from "react";

import PasswordRecover from "@/components/PasswordRecover/PasswordRecover";
import PasswordReset from "@/components/PasswordRecover/PasswordReset/PasswordReset";

const ForgotPasswordTest = () => {
  const [user_data, setUserData] = useState({ id: "", token: "" });

  useEffect(() => {
    setUserData({id: sessionStorage.getItem("user_id") || "", token: sessionStorage.getItem("fg_token") || ""})
  }, []);

  return (
    <div>
      <PasswordRecover>
        <PasswordReset id={user_data.id} token={user_data.token} />
      </PasswordRecover>
    </div>
  );
};
export default ForgotPasswordTest;
