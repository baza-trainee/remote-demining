import { useEffect, useState } from "react";

import AdminPasswordChangePage from "@/components/AdminPasswordChangePage/AdminPasswordChangePage";

const Page = () => {
  const [user_data, setUserData] = useState({  token: "" });

  useEffect(() => {
    setUserData({
      token: sessionStorage.getItem("cp_token") || "",
    });
  }, []);

  return (
    <>
      <AdminPasswordChangePage token={user_data.token} />
    </>
  );
};

export default Page;
