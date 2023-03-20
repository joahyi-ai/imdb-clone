import { fetch, ProxyAgent } from "undici";
import Results from "./components/Results";

const API_KEY = process.env.API_KEY;
const dispatcher =
  process.env.NODE_ENV === "development"
    ? new ProxyAgent("http://127.0.0.1:7890")
    : undefined;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { dispatcher }
  ).catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

  const data = await res.json();
  const results = data.results;
  console.log(results);
  return (
    <div>
      <Results results={results} />
    </div>
  );
}

////////////////////////////
// 前端代码请求-fetch函数
// 已解决代码
// "use client";

// import { useCallback, useEffect } from "react";

// const API_KEY = process.env.API_KEY;

// export default function Home({ searchParams }) {
//   const genre = searchParams.genre || "fetchTrending";

//   const fetchDate = useCallback(async () => {
//     const res = await fetch(
//       // `https://api.themoviedb.org/3/${
//       //   genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
//       // }?api_key=${API_KEY}&language=en-US&page=1`,
//       `https://api.themoviedb.org/3/movie/top_rated?api_key=2544ccfbf1b71cc3344dabb40d856a88&language=en-US&page=1`
//     );

//     const data = await res.json();
//     const results = data.results;
//     console.log(results);
//   }, []);

//   useEffect(() => {
//     fetchDate();
//   }, [fetchDate]);

//   return (
//     <div>
//       <h1 className="text-red-400">HOME</h1>
//     </div>
//   );
// }

/////////////////////////////////////////////
// 课程原代码
// const API_KEY = process.env.API_KEY;

// export default async function Home({ searchParams }) {
//   const genre = searchParams.genre || "fetchTrending";
//   const res = await fetch(
//     // `https://api.themoviedb.org/3/${
//     //   genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
//     // }?api_key=${API_KEY}&language=en-US&page=1`,
//     `https://api.themoviedb.org/3/movie/top_rated?api_key=2544ccfbf1b71cc3344dabb40d856a88&language=en-US&page=1`
//     // "https://v1.jinrishici.com/all.json"
//     // "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty"
//   );
//   const data = await res.json();

//   const results = data.results;
//   console.log(data);

//   return (
//     <div>
//       <h1 className="text-red-400">HOME</h1>
//     </div>
//   );
// }
