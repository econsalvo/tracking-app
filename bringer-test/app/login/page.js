"use client";
import axios from "axios";
import styles from "./login.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Form, Button } from "antd";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (values) => {
    const payload = {
      username: values.username,
      password: values.password,
    };
    console.log("login");
    try {
      const response = await axios.post("/api/generate_token", payload);
      console.log(response);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Form onFinish={handleSubmit} className={styles.form}>
        <Form.Item label="Username">
          <Input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            rules={[{ required: true, message: "Please input your username!" }]}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item label="Password">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            style={{ fontSize: "20px" }}
            onChange={(event) => setPassword(event.target.value)}
            rules={[{ required: true, message: "Please input your password!" }]}
          />
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
