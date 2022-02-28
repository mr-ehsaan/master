import React from "react";
import { Menu, Layout } from "antd";

import { Link } from "react-router-dom";

function Header() {
  const { Header } = Layout;
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        backgroundColor: "#ffffff",
      }}
    >
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={"/signup"}>Sign Up</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Header;
