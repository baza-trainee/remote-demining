"use client"
import { useRouter } from "next/navigation";

import AdminPasswordChangePage from "@/components/AdminPasswordChangePage/AdminPasswordChangePage";

interface PageParams {
  token: string;
}

const ChangePasswordPage = ({ params }: { params: PageParams }) => {
  const router = useRouter();

  if (!params.token) {
    router.push("/admin"); 
    return null;
  }

  return (
    <div>
        <AdminPasswordChangePage token={params.token} />
    </div>
  );
};

export default ChangePasswordPage;
