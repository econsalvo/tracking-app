"use client";

import { Input, Button, Steps } from "antd";
import { useState } from "react";
import { trackParcel } from "../utils/trackParcel";
import styles from "./tracking.module.css";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("BPS1EP58YI5SKBR");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const trackingInfo = await trackParcel(trackingNumber);
      console.log(trackingInfo);
    } catch (error) {
      console.log(error);
    }
  };
  const description = "This is a description.";
  return (
    <>
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <Input
            placeholder="tracking number"
            style={{ width: "12rem", height: "2.5rem" }}
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
          <Button onClick={handleSubmit} style={{ height: "2.5rem" }}>
            Submit
          </Button>
        </div>
      </div>
      <div className={styles.stepsContainer}>
        <Steps direction="vertical" current={1}>
          <Steps.Step title="Finished" description={description} />
          <Steps.Step title="In Progress" description={description} />
          <Steps.Step title="Waiting" description={description} />
        </Steps>
      </div>
    </>
  );
};

export default Tracking;
