import axios from "axios";

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5006",
    });

    // Automatically set JWT token on the request headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  login = (requestBody) => {
    return this.api.post("/auth/login", requestBody);
    // same as
    // return axios.post("http://localhost:5005/auth/login");
  };

  signup = (requestBody) => {
    return this.api.post("/auth/signup", requestBody);
    // same as
    // return axios.post("http://localhost:5005/auth/singup");
  };

  plants = (requestBody) => {
    return this.api.post("/plants", requestBody);
  };

  profileEdit = (requestBody) => {
    return this.api.post("/profile/edit", requestBody);
  };

  profileEditPassword = (requestBody) => {
    return this.api.post("/profile/edit-password", requestBody);
  };

  profileDelete = (requestBody) => {
    return this.api.post("/profile/delete-account", requestBody);
  };

  addPlant = (requestBody) => {
    // console.log("Ola");
    return this.api.post("/plant-list/add-plant", requestBody);
  };

  getAllPlantsByUser = () => {
    return this.api.get("/plant-list");
  };

  // deletePlant = (requestBody) => {
  //   return this.api.post("/plant-list/delete-plant", requestBody);
  // };

  deletePlant = (data) => {
    return this.api.post("/plant-list/delete-plant", data);
  };

  verify = () => {
    return this.api.get("/auth/verify");
    // same as
    // return axios.post("http://localhost:5005/auth/verify");
  };
}

// Create one instance (object) of the service
const authService = new AuthService();

export default authService;
