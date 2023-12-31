import PasswordRecover from "@/components/PasswordRecover/PasswordRecover";
import PasswordReset from "@/components/PasswordRecover/PasswordReset/PasswordReset";

const ForgotPasswordPage = ({
  params,
}: {
  params: { id: string; token: string };
}) => {
  return (
    <main>
      <PasswordRecover>
        <PasswordReset id={params.id} token={params.token} />
      </PasswordRecover>
    </main>
  );
};
export default ForgotPasswordPage;
