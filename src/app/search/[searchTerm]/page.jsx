import Results from "@/app/components/Results";
import { fetch, ProxyAgent } from "undici";
const dispatcher =
  process.env.NODE_ENV === "development"
    ? new ProxyAgent("http://127.0.0.1:7890")
    : undefined;

export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`,
    { dispatcher }
  ).catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();

  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
}
