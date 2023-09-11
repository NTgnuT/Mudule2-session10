import React from "react";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import Button from "../component/base/button/Button";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Đây là trang chủ </h1>
      <Button title="Thêm" size={100} type={"primary"} />
      <Button title="Mới" type={"danger"} />
      <Footer />
    </>
  );
}
