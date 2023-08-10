import AddButton from "@/components/AddButton/AddButton";
import AdminEditContactsInput from "@/components/AdminEditContactsForm/AdminEditContactsInput";
import Button from "@/components/Button/Button";
import AddImage from "@/components/Crop/AddImage";

import styles from "./AdminCardAdd.module.css";

const AdminCardAdd = () => {
  return (
    <form className={styles.container}>
      <AddImage imgWidth={966} imgHeight={120} title={"Додати зображення"} />
      <div className={styles.input_container}>
        <AdminEditContactsInput placeholder={"Заголовок"} editable />
        <AdminEditContactsInput placeholder={"Опис зображення"} editable />
        <AdminEditContactsInput placeholder={"Опис пункту"} editable />
      </div>
      <div className={styles.btn_add_container}>
        <AddButton />
      </div>
      <div className={styles.btn_send_container}>
        <Button type="submit">
          Надіслати
        </Button>
      </div>
    </form>
  );
};

export default AdminCardAdd;
