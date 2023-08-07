import PasswordRecover from "@/components/PasswordRecover/PasswordRecover";
import SendMail from "@/components/PasswordRecover/SendMail/SendMail";

export default function recoverPass() {
  return <main><PasswordRecover><SendMail/></PasswordRecover> </main>;
}
