"use client";
import { useEffect, useState } from "react";

import { getContacts } from "@/lib/admin/content";

import AdminWrapper from "../AdminWrapper/AdminWrapper";
import Breadcrumb, { CrumbItem } from "../Breadcrumb/Breadcrumb";

import AdminDisplayContacts from "./AdminDisplayContacts/AdminDisplayContacts";

import styles from "./AdminContactsPage.module.css";

export interface ContactsFormValues {
  id: string;
  email: string;
  phone: string;
}

const items: CrumbItem[] = [{ label: "Контакти", path: "/admin/contacts" }];

const AdminContactsPage: React.FC = () => {
  const [contactData, setContactData] = useState<ContactsFormValues>({
    id: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      const data = await getContacts();
      if (data?.length) {
        const firstContact = data[0];
        setContactData({
          id: firstContact._id,
          email: firstContact.data.email,
          phone: firstContact.data.phone,
        });
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  return (
    <div>
      <div className={styles.heading_container}>
        <Breadcrumb items={items} />
      </div>
      <AdminWrapper size="bigWrapper">
        <AdminDisplayContacts contactData={contactData} />
      </AdminWrapper>
    </div>
  );
};

export default AdminContactsPage;
