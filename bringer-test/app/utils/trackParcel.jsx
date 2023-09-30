import axios from "axios";

export const trackParcel = async (trackingNumber) => {
  try {
    const response = await axios.get(
      `https://bps.bringer.io/public/api/v2/get/parcel/tracking.json?tracking_number=${trackingNumber}`,
      {
        method: "get",
        headers: {
          Authorization: "Bearer " + process.env.BRINGER_TKN,
        },
      }
    );

    const data = response.data;
    return data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      // Handle 400 Bad Request Error
      console.error("Bad Request Error:", error);
      return { success: false, error: "Bad Request Error" };
    } else {
      console.error("An error occurred while making the Axios request:", error);
      return { success: false, error: "An error occurred" };
    }
  }
};
