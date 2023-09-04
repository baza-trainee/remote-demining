import AdminWrapper from "../AdminWrapper/AdminWrapper";
import Breadcrumb, { CrumbItem } from "../Breadcrumb/Breadcrumb";

import AdminReportsList from "./AdminReportsList/AdminReportsList";

import styles from "./AdminReports.module.css";

const items: CrumbItem[] = [{ label: "Звітність", path: "/admin/reports" }];

const AdminReports = () => {
  return (
    <div>
      <div className={styles.heading_container}>
        <Breadcrumb items={items} />
      </div>
      <AdminWrapper size="bigWrapper">
        <AdminReportsList />
      </AdminWrapper>
    </div>
  );
};

export default AdminReports;
