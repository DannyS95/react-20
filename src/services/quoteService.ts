import { Quote } from "../types/quote";

const BASE_URL = "https://api.quotable.io";

export const fetchRandomQuote = async (): Promise<Quote> => {
  const res = await fetch(`${BASE_URL}/random`);
  const data = await res.json();
  return {
    content: data.content,
    author: data.author,
  };
};
