import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5006";

const apiClient = axios.create({
  baseURL,
});

apiClient.interceptors.request.use((config) => {
  // Retrieve the JWT token from the local storage
  const storedToken = localStorage.getItem("authToken");
  console.log({ storedToken });
  if (storedToken) {
    config.headers = { Authorization: `Bearer ${storedToken}` };
  }

  return config;
});

export default apiClient;
