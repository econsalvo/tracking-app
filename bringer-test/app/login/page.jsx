"use client";
import axios from "axios";
import styles from "./login.module.css";
import { CopyOutlined, LogoutOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Input, Form, Button, Collapse, message } from "antd";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/generate_token", values);

      const jwtToken = response.data.token;
      setToken(jwtToken);
      localStorage.setItem("token", jwtToken);
      setIsLoading(false);
      setIsLogin(true);
    } catch (error) {
      console.log(error);
    }
  };

  const copyToClipboard = () => {
    const textToCopy = token;
    navigator.clipboard.writeText(textToCopy);
    message.success("Copied to clipboard");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
      setToken(token);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };

  const items = [
    {
      key: "1",
      label: "Show JWT Token",
      children: (
        <div style={{ maxHeight: "300px", overflowY: "auto" }}>
          <p>{token}</p>
          <Button style={{ margin: "1rem" }} onClick={copyToClipboard}>
            Copy
            <CopyOutlined />
          </Button>
          <Button style={{ margin: "1rem" }} onClick={handleLogout}>
            Logout
            <LogoutOutlined />
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div>
      {!isLogin ? (
        <div className={styles.container}>
          <Form onFinish={handleSubmit} className={styles.form}>
            <Form.Item
              name="username"
              label={
                <span style={{ fontSize: "18px", fontWeight: "500" }}>
                  Username
                </span>
              }
            >
              <Input
                type="text"
                name="username"
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
                style={{ fontSize: "18px" }}
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label={
                <span style={{ fontSize: "18px", fontWeight: "500" }}>
                  Password
                </span>
              }
            >
              <Input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                style={{ fontSize: "18px" }}
                onChange={(event) => setPassword(event.target.value)}
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              />
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Button
                htmlType="submit"
                style={{ width: "100%" }}
                loading={isLoading}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : (
        <div className={styles.tknContainer}>
          <Collapse
            style={{
              width: "100%",
              background: "white",
              maxWidth: "30rem",
            }}
            items={items}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
