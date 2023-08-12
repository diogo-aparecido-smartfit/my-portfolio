import axios from "axios";

const api = axios.create({
  baseURL: "https://my-portfolio-ftgq.onrender.com",
});

export default api;
