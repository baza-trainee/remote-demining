"use client";

import AdminWrapper from "../AdminWrapper/AdminWrapper";
import AdminCardAdd from "./AdminCardAdd/AdminCardAdd";

import AdminCardsContainer from "./AdminCardsList/AdminCardsList";

const AdminCards = () => {
  return (
    <AdminWrapper size="bigWrapper">
      {/* <AdminCardsContainer /> */}
      <AdminCardAdd />
    </AdminWrapper>
  );
};

export default AdminCards;
