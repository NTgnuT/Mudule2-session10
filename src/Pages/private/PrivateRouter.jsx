import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouter() {
  const isLogin = true; // Đã đăng nhập rồi
  return isLogin ? <Outlet /> : <Navigate to={"/login"} />;
}
