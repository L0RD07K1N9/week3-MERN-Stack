import { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";

export default function ApiList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page]);

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card className="max-w-2xl mx-auto animate-slide-up">
      <h2 className="text-2xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in">Posts</h2>
      <input
        className="border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2 mb-4 w-full focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out bg-white/70 dark:bg-gray-900/70 backdrop-blur placeholder-gray-400 text-lg animate-fade-in"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <div className="animate-pulse text-blue-500">Loading...</div>}
      {error && <div className="text-red-500 animate-fade-in">{error}</div>}
      <ul>
        {filtered.map((post) => (
          <li key={post.id} className="mb-3 group animate-fade-in transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 transform">
            <div className="font-semibold text-lg animate-slide-up group-hover:opacity-100 transition-all duration-300 ease-in-out">{post.title}</div>
            <div className="text-gray-500 dark:text-gray-300 text-base animate-fade-in animate-float group-hover:opacity-100 transition-all duration-300 ease-in-out">{post.body}</div>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 mt-4 justify-center animate-fade-in">
        <Button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
          Previous
        </Button>
        <span className="font-semibold text-lg">Page {page}</span>
        <Button onClick={() => setPage((p) => p + 1)}>
          Next
        </Button>
      </div>
    </Card>
  );
}
