
import PasswordRecover from "@/components/PasswordRecover/PasswordRecover";
import PasswordReset from "@/components/PasswordRecover/PasswordReset/PasswordReset";


const ForgotPasswordPage = ({
  params,
}: {
  params: { id: string; token: string };
}) => {
  return (
    <div>
      <PasswordRecover>
        <PasswordReset id={params.id} token={params.token} />
      </PasswordRecover>
    </div>
  );
};
export default ForgotPasswordPage;
