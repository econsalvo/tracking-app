import { Button, Col, Row } from "antd";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <Row align="top" justify="center">
      <Col>
        <Button
          onClick={handleLoginClick}
          style={{ marginTop: "1rem", width: "12rem" }}
        >
          Login
        </Button>
      </Col>
    </Row>
  );
};
