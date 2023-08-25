import { FC } from "react";

import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { CrumbItem } from "../Breadcrumb/Breadcrumb";

import Logos from "./Logos/Logos";

import styles from "./AdminLogos.module.css";

interface AdminLogosProps {}

const AdminLogos: FC<AdminLogosProps> = ({}) => {
  const items: CrumbItem[] = [{ label: "Лого партнерів", path: "/admin/logo" }];
  return (
    <div>
      <div className={styles.heading_container}>
        <Breadcrumb items={items} />
      </div>
      <Logos />
    </div>
  );
};

export default AdminLogos;
