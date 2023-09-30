"use client";
import axios from "axios";
import styles from "./login.module.css";
import { CopyOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Input, Form, Button, Collapse } from "antd";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState("");

  const handleSubmit = async (values) => {
    console.log(values);
    setIsLogin(true);
    try {
      const response = await axios.post("/api/generate_token", values);
      console.log(response.data);
      setIsLogin(true);
      const jwtToken = response.data.token;
      setToken(jwtToken);
    } catch (error) {
      console.log(error);
    }
  };

  const copyToClipboard = () => {
    const textToCopy = token;
    navigator.clipboard.writeText(textToCopy);
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
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
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
