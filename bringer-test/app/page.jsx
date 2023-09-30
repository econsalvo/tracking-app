"use client";
import { Card } from "antd";
import Link from "next/link";
import styles from "./home.module.css";

const Home = () => {
  return (
    <main className={styles.containerStyle}>
      <Link href="/login">
        <Card className={styles.card}>
          <div>
            <h1>Login View</h1>
          </div>
        </Card>
      </Link>
      <Link href="/tracking_view">
        <Card className={styles.card}>
          <div>
            <h1>Tracking View</h1>
          </div>
        </Card>
      </Link>
    </main>
  );
};

export default Home;
