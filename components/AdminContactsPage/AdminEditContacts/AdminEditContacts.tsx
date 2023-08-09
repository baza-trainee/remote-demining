import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AdminEditContactsInput from "@/components/AdminEditContactsForm/AdminEditContactsInput";
import Button from "@/components/Button/Button";

import { ContactsFormValues } from "../AdminContactsPage";
import validationSchema from "../validationSchema";

import styles from "../AdminContactsPage.module.css";

interface EditableContactsFormProps {
  contactData: ContactsFormValues;
  onSave: () => void;
}

const AdminEditContacts: React.FC<EditableContactsFormProps> = ({
  contactData,
  onSave,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactsFormValues>({
    defaultValues: {
      email: contactData.email,
      phone: contactData.phone,
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = ({ email, phone }: ContactsFormValues) => {
    console.log({ email, phone });
    onSave();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.inputWrapper}>
        <AdminEditContactsInput
          label="Телефони"
          type="tel"
          editable={true}
          errorMessage={errors.phone?.message}
          {...register("phone")}
        />

        <AdminEditContactsInput
          label="Електронна пошта"
          type="email"
          editable={true}
          errorMessage={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className={styles.buttonWrapper}>
        <Button width="291" height="64" type="submit">
          Надіслати
        </Button>
      </div>
    </form>
  );
};

export default AdminEditContacts;
