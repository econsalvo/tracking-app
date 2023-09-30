"use client";
import { Menu } from "antd";
import {
  LoginOutlined,
  HomeOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const [current, setCurrent] = useState("mail");
  const router = useRouter();

  const onClick = (e) => {
    setCurrent(e.key);
    switch (e.key) {
      case "home":
        router.push("/");
        break;
      case "login":
        router.push("/login");
        break;
      case "tracking":
        router.push("/tracking_view");
        break;
      default:
        break;
    }
  };

  const items = [
    {
      label: "Home",
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: "Login",
      key: "login",
      icon: <LoginOutlined />,
    },
    {
      label: "Tracking",
      key: "tracking",
      icon: <EnvironmentOutlined />,
    },
  ];

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};
