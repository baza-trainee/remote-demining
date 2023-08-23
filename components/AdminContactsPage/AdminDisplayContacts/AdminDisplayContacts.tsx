import AdminEditContactsInput from "@/components/AdminEditContactsForm/AdminEditContactsInput";
import Button from "@/components/Button/Button";

import { ContactsFormValues } from "../AdminContactsPage";

import styles from "../AdminContactsPage.module.css";

interface NonEditableContactsProps {
  contactData: ContactsFormValues;
  onEdit: () => void;
}

const AdminDisplayContacts: React.FC<NonEditableContactsProps> = ({
  contactData,
  onEdit,
}) => {
  return (
    <form>
      <div className={styles.inputWrapper}>
        <AdminEditContactsInput
          label="Телефони"
          type="tel"
          editable={false}
          readOnly
          value={contactData?.phone}
        />

        <AdminEditContactsInput
          label="Електронна пошта"
          type="email"
          editable={false}
          readOnly
          value={contactData?.email}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button onClick={onEdit} width="291" height="64">
          Редагувати
        </Button>
      </div>
    </form>
  );
};

export default AdminDisplayContacts;
