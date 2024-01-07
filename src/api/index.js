import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization:
      localStorage.getItem("access_token") &&
      `Bearer ${localStorage.getItem("access_token")}`,
  },
});
