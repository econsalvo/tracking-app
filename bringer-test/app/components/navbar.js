import { Button, Col, Row } from "antd";

export const Navbar = () => {
  return (
    <Row align="top" justify="center">
      <Col>
        <Button style={{ marginTop: "1rem", width: "12rem" }}>Login</Button>
      </Col>
    </Row>
  );
};
