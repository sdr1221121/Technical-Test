import ArticleRepo from "../repositories/ArticleRepo.js";
import { generateArticleAi } from "./aiClient.js";
import cron from "node-cron";

export function listArticles() {
  return ArticleRepo.getAll();
}

export function getArticle(id) {
  return ArticleRepo.getById(id);
}

export async function generateArticle() {
  const content = await generateArticleAi();

  const newArticle = ArticleRepo.add({
    title: "Technology",
    content: content,
    date: new Date().toISOString(),
  });

  return newArticle;
}

cron.schedule("0 0 * * *", () => {
  (async () => {
      await generateArticle();
  })();
});