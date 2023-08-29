import Link from "next/link";

import AdminEditContactsInput from "@/components/AdminEditContactsForm/AdminEditContactsInput";

import { ContactsFormValues } from "../AdminContactsPage";

import styles from "../AdminContactsPage.module.css";

interface NonEditableContactsProps {
  contactData: ContactsFormValues;
}

const AdminDisplayContacts: React.FC<NonEditableContactsProps> = ({
  contactData,
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
        <Link href="/admin/contacts/edit">Редагувати</Link>
      </div>
    </form>
  );
};

export default AdminDisplayContacts;
