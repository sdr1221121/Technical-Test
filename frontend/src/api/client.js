import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getArticles= ()=>api.get("/articles");

export const getArticleById= (id)=>api.get(`/articles/${id}`)

export const createArticles= ()=>api.post("/articles")