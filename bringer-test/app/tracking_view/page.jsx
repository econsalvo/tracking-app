"use client";

import { Input, Button, Steps } from "antd";
import { useState, useEffect } from "react";
import { trackParcel } from "../utils/trackParcel";
import styles from "./tracking.module.css";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("BPS1EP58YI5SKBR");
  const [stepsData, setStepsData] = useState([]);

  const getData = async () => {
    try {
      const trackingInfo = await trackParcel(trackingNumber);
      setStepsData(trackingInfo.parcel_tracking_items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const trackingInfo = await trackParcel(trackingNumber);
      setStepsData(trackingInfo.parcel_tracking_items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const formatDateTime = (dateTimeString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateTimeString).toLocaleString(undefined, options);
  };

  const getTitle = (step) => {
    const title =
      step.tracking_code_vendor?.tracking_code_vendor_locales[0]?.description ||
      step.tracking_code.tracking_code_locales[0].description;
    return title;
  };

  const getStatus = (step) => {
    const status =
      step.tracking_code_vendor?.tracking_code_vendor_locales[0]?.locale
        .active || step.tracking_code.tracking_code_locales[0].locale.active;
    if (status) {
      return "finish";
    } else {
      return "wait";
    }
  };
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
        <Steps direction="vertical" current={1} className={styles.centerSteps}>
          {stepsData.map((step, index) => (
            <Steps.Step
              key={index}
              title={getTitle(step)}
              description={step.location || step.city}
              subTitle={formatDateTime(step.createdAt)}
              status={getStatus(step)}
            />
          ))}
        </Steps>
      </div>
    </>
  );
};

export default Tracking;
