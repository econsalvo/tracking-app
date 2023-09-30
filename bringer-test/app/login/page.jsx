"use client";
import axios from "axios";
import styles from "./login.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Form, Button } from "antd";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const router = useRouter();

  const handleSubmit = async (values) => {
    const payload = {
      username: values.username,
      password: values.password,
    };
    console.log("login success");
    try {
      const response = await axios.post("/api/generate_token", payload);
      console.log(response);
      setIsLogin(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!isLogin ? (
        <div className={styles.container}>
          <Form onFinish={handleSubmit} className={styles.form}>
            <Form.Item
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
        <div> other</div>
      )}
    </div>
  );
};

export default Login;
