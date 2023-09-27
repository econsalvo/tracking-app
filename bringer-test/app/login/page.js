"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Row, Col, Form } from "antd";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    };

    try {
      const response = await axios.post("/api/generate_token", payload);
      console.log(response);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row>
      <form onSubmit={handleSubmit}>
        <Col>
          <label htmlFor="username">Username:</label>
          <Input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            style={{ width: "12rem" }}
          />
        </Col>
        <Col>
          <label htmlFor="password">Password:</label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={{ width: "12rem" }}
          />
        </Col>
        <button type="submit">Submit</button>
      </form>
    </Row>
  );
}
