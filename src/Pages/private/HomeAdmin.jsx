import React from "react";
import Sidebar from "../../Layouts/Admin/sidebar/Sidebar";
import Header from "../../Layouts/Admin/header/Header";

export default function HomeAdmin() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="d-flex flex-column" style={{ flex: 1 }}>
          <Header />
          <h1>Trang chủ admin</h1>
        </div>
      </div>
    </>
  );
}
