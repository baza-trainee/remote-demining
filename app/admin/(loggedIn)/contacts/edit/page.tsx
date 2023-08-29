"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ContactsFormValues } from "@/components/AdminContactsPage/AdminContactsPage";
import AdminEditContacts from "@/components/AdminContactsPage/AdminEditContacts/AdminEditContacts";
import { getContacts } from "@/lib/admin/content";

const EditContacts = () => {
  const [contactData, setContactData] = useState<ContactsFormValues>({
    id: "",
    email: "",
    phone: "",
  });
  const router = useRouter();

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

  const handleSave = () => {
    router.push("/admin/contacts");
  };

  return <AdminEditContacts contactData={contactData} onSave={handleSave} />;
};

export default EditContacts;
