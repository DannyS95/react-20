import { Quote } from "../models/QuoteModel";

const BASE_URL = "https://api.quotable.io/quotes/random";

export const fetchAvailableTags = async (): Promise<string[]> => {
  const res = await fetch("https://api.quotable.io/tags");
  const data = await res.json();
  return data.map((tag: any) => tag.slug);
};

export const getQuote = async (
  options?: { author?: string; tag?: string }
): Promise<Quote> => {
  const { author, tag } = options || {};
  const params = new URLSearchParams();

  if (author?.trim()) params.append("author", author.trim());
  if (tag?.trim()) params.append("tags", tag.trim());

  const url = params.toString()
    ? `${BASE_URL}?${params.toString()}`
    : BASE_URL;

  try {
    const res = await fetch(url);
    const data: Quote[] = await res.json();

    if (Array.isArray(data) && data.length > 0) {
      return {
        content: data[0].content,
        author: data[0].author,
      };
    }

    return {
      content: "No quote found.",
      author: "",
    };
  } catch {
    return {
      content: `⚠️ Unable to reach the quote server. This may be caused by a network issue, a CORS restriction, or a browser security block (such as an invalid certificate).`,
      author: "",
    };
  }
};

export const fetchTagsForAuthor = async (
  author: string
): Promise<string[]> => {
  const params = new URLSearchParams();
  params.append("author", author.trim());
  params.append("limit", "100"); // enough to gather most tag samples

  const res = await fetch(`https://api.quotable.io/quotes?${params}`);
  const data = await res.json();

  const tagSet = new Set<string>();
  for (const quote of data.results || []) {
    for (const tag of quote.tags || []) {
      tagSet.add(tag);
    }
  }

  return Array.from(tagSet);
};

