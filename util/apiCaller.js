import axios from "axios";

const apiCaller = async () => {
  try {
    const response = await axios.get("https://valorant-api.com/v1/agents");
  } catch {
    console.log("api call failed");
  }
};

export default router;
