import styles from "./AdminNavBar.module.css";
import AdminNavLink from "./AdminNavLink/AdminNavLink";
import ExitButton from "../ExitButton/ExitButton";
import cards from "@/public/images/icons/links/Group.svg";
import partners from "@/public/images/icons/links/noun-group-124925 1.svg";
import news from "@/public/images/icons/links/noun-newspaper-2172898 1.svg";
import slider from "@/public/images/icons/links/noun-slider-2123171 1.svg";
import reports from "@/public/images/icons/links/noun-reporting-5104327 1.svg";
import contacts from "@/public/images/icons/links/noun-contacts-1722449 1.svg";
import password from "@/public/images/icons/links/noun-reset-password-3309848 1.svg";

const AdminNavBar = () => {
  return (
    <nav className={styles.wrapper}>
      <AdminNavLink label="Новини" href="/admin/news" src={news} />
      <AdminNavLink label="Слайдер" href="/admin/slider" src={slider} />
      <AdminNavLink label="Картки" href="/admin/cards" src={cards} />
      <AdminNavLink
        label="Лого партнерів"
        href="/admin/partners"
        src={partners}
      />
      <AdminNavLink label="Звітність" href="/admin/reports" src={reports} />
      <AdminNavLink label="Контакти" href="/admin/contacts" src={contacts} />
      <AdminNavLink
        label="Змінити пароль"
        href="/changePassword"
        src={password}
        style={{
          marginTop: "calc(120px - var(--admin-navbar-row-gap))",
          marginBottom: "calc(40px - var(--admin-navbar-row-gap))",
        }}
      />
      <ExitButton />
    </nav>
  );
};

export default AdminNavBar;
