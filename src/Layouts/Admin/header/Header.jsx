import React from "react";
import "./header.css";
import { BellOutlined, MenuOutlined, MessageOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <>
      <div className="header-admin">
        <div>
          <MenuOutlined style={{ fontSize: 30 }} />
        </div>
        <div className="d-flex gap-3">
          <BellOutlined style={{ fontSize: 20 }} />
          <MessageOutlined style={{ fontSize: 20 }} />
        </div>
      </div>
    </>
  );
}
