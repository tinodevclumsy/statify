import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
