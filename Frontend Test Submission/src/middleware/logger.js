import axios from "axios";

const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN"; // Replace with actual token if needed

export const logEvent = async (level, pkg, message) => {
  try {
    await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      {
        stack: "frontend",
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
  } catch (err) {
    console.error("Logging failed", err);
  }
};
