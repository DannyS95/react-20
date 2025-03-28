import React, { useEffect, useState } from "react";
import { getQuote, fetchAvailableTags, fetchTagsForAuthor } from "../services/quoteService";
import { Quote } from "../types/quote";

const QuoteBox = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const uniqueTags = Array.from(new Set(tags));


  const fetchQuote = async () => {
    setLoading(true);
    try {
      const result = await getQuote({ author, tag });
      setQuote(result);
    } catch {
      setQuote({
        content: "Something went wrong.",
        author: "",
      });
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    if (author.trim() === "") {
      fetchAvailableTags().then(setTags);
      setTag("");
      return;
    }
  
    const timeout = setTimeout(() => {
      fetchTagsForAuthor(author).then((filteredTags) => {
        setTags(filteredTags);
        setTag("");
      });
    }, 300);
  
    return () => clearTimeout(timeout);
  }, [author]);

  useEffect(() => {
    fetchQuote();             
    fetchAvailableTags().then(setTags);
  }, []);
  
  
  

  return (
    <div className="bg-white p-8 rounded-xl shadow-md max-w-xl w-full space-y-6">
      {/* 🔍 Author Input + Tag Dropdown */}
      <div className="flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Search by author..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="flex-grow border border-gray-300 rounded px-4 py-2"
        />
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
          disabled={tags.length === 0}
        >
          <option value="">Filter by tag</option>
          {Array.from(new Set(tags)).map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

      </div>

      {/* 📜 Quote Display */}
      <div>
        <p className="text-xl font-medium text-gray-800">
          {loading ? "Loading..." : `"${quote?.content}"`}
        </p>
        {quote?.author && (
          <p className="text-right text-sm text-gray-500 mt-2">
            – {quote.author}
          </p>
        )}
      </div>

      {/* 🔁 New Quote Button */}
      <div className="text-center">
        <button
          onClick={fetchQuote}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          disabled={loading}
        >
          {loading ? "Fetching..." : "New Quote"}
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
