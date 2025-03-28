import React, { useEffect, useState } from "react";
import { fetchRandomQuote} from "../services/quoteService";
import { Quote } from "../types/quote";


const QuoteBox = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);

  const getNewQuote = async () => {
    setLoading(true);
    try {
      const randomQuote = await fetchRandomQuote();
      setQuote(randomQuote);
    } catch (err) {
      setQuote({
        content: "Something went wrong. Try again later.",
        author: "",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div className="bg-white p-8 rounded-xl shadow-md max-w-xl w-full space-y-6">
      <div>
        <p className="text-xl font-medium text-gray-800">
          {loading ? "Loading..." : `"${quote?.content}"`}
        </p>
        <p className="text-right text-sm text-gray-500 mt-2">
          {quote?.author && `– ${quote.author}`}
        </p>
      </div>
      <div className="text-center">
        <button
          onClick={getNewQuote}
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
