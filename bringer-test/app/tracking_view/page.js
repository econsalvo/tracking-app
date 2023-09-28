"use client";

import { Input } from "antd";
import { useState } from "react";
import { trackParcel } from "../utils/trackParcel";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const trackingInfo = await trackParcel(trackingNumber);
      console.log(trackingInfo);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>tracking view</h1>
      <Input
        placeholder="tracking number"
        style={{ width: "12rem" }}
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Tracking;
