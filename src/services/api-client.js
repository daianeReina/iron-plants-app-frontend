import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5006";

const apiClient = axios.create({
  baseURL,
});

export default apiClient;
