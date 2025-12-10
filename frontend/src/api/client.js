import axios from "axios";

const defaultBackendURL = "http://13.62.46.78:5000";

const backendHost = process.env.REACT_APP_BACKEND_HOST || process.env.IP;
const backendPort = process.env.REACT_APP_BACKEND_PORT || process.env.BACKEND_PORT;

const baseURL = (backendHost && backendPort)
  ? `http://${backendHost}:${backendPort}`
  : defaultBackendURL;

console.log("API BaseURL:", baseURL);

export const api = axios.create({
  baseURL,
});

export const getArticles = () => api.get("/articles");
export const getArticleById = (id) => api.get(`/articles/${id}`);
export const createArticles = (data) => api.post("/articles", data);
