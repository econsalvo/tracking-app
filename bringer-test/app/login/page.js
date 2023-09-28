"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Row, Col, Form, Button } from "antd";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
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
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col span={8} style={{ border: "1px solid white", padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Form.Item label={<span style={{ color: "white" }}>Username</span>}>
            <Input
              type="text"
              name="username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Item>
          <Form.Item label={<span style={{ color: "white" }}>Password</span>}>
            <Input
              type="password"
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Submit
            </Button>
          </Form.Item>
        </form>
      </Col>
    </Row>
  );
};

export default Login;
