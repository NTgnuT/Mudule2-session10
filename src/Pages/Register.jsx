import React, { useState } from "react";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import Button from "../component/base/button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { act_register } from "../actions/userAction";
import { v4 as uuid } from "uuid";

export default function Register() {
  const dispatch = useDispatch();
  // chuyển hướng trang
  const navigate = useNavigate();

  const [user, setUser] = useState({
    user_id: uuid(),
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(act_register(user));
    navigate("/login");
  };
  return (
    <>
      <Navbar />
      <div className="big">
        <form className="form-container" onSubmit={handleSubmit}>
          <h3 className="text-center p-3">Form Register</h3>

          <div className="form-group">
            <label className="form-label" htmlFor="name">
              User Name:
            </label>
            <input
              name="userName"
              onChange={handleChange}
              className="form-input"
              type="text"
              id="name"
              placeholder="Nhập họ và tên"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              name="email"
              onChange={handleChange}
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
              name="password"
              onChange={handleChange}
              className="form-input"
              type="password"
              id="password"
              placeholder="Nhập mật khẩu"
            />
          </div>

          <div>
            <Button title={"Register"} type={"primary"} size={"100%"} />
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
