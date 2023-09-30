"use client";
import { Card } from "antd";
import Link from "next/link";

const Home = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
  };

  return (
    <main style={containerStyle}>
      <Link href="/login">
        <Card>
          <h1>1</h1>
        </Card>
      </Link>
      <Link href="/tracking_view">
        <Card>
          <h1>2</h1>
        </Card>
      </Link>
    </main>
  );
};

export default Home;
