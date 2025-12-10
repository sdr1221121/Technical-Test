import { pipeline } from "@huggingface/transformers";

export async function generateArticleAi() {
  const generator = await pipeline(
    "text-generation",
    "HuggingFaceTB/SmolLM2-135M-Instruct"
  );

  const messages = [
    {
      role: "system",
      content: "You are a helpful assistant that writes well-structured articles in JSON format."
    },
    { role: "title", content: "choose a title about technology" },
    { role: "content", content: "talk about technology" }
  ];

  const output = await generator(messages, {
    max_new_tokens: 300,
    temperature: 1.3,
    top_p: 0.9
  });

  return output[0].generated_text.at(-1).content;
}