import React from "react";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import Button from "../component/base/button/Button";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="big">
        <form className="form-container">
          <h3 className="text-center p-3">Form Login</h3>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              className="form-input"
              type="text"
              id="email"
              placeholder="Nhập email"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password:
            </label>
            <input
              className="form-input"
              type="password"
              id="password"
              placeholder="Nhập mật khẩu"
            />
          </div>

          <div>
            <Button title={"login"} type={"primary"} size={"100%"} />
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <Link to={"/"}>Quay lại trang chủ</Link>
            <Link>Quên mật khẩu</Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
