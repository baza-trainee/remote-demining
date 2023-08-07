"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import PasswordRecover from "@/components/PasswordRecover/PasswordRecover";
import PasswordReset from "@/components/PasswordRecover/PasswordReset/PasswordReset";

const ForgotPasswordPage = () => {
  const pathname = usePathname();
  const [user_data, setUserData] = useState({id: "", token: ""});

  useEffect(() => {
    const arr = pathname
      .trim()
      .split("/").filter((el) => el.match(/^(?!.*\b(admin|forgot-password)\b).+$/))
      setUserData({ id: arr[0], token: arr[1]});
  }, [pathname]);

  return (
    <div>
      <PasswordRecover>
        <PasswordReset id={user_data.id} token={user_data.token} />
      </PasswordRecover>
    </div>
  );
};
export default ForgotPasswordPage;
