import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
// import { dummy } from "../movieDummy";
import "./Movies.css";

function getMovieList(page) {
  return new Promise((resolve, reject) => {
    console.log(page);
    const config = {
      method: "get",
      url: `https://api.themoviedb.org/3/movie/now_playing?language=ko&page=${page}&region=kr`,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWZlY2UzNjMxMDlkNzBjYzdiYjkzOTMyMzBmM2VlNCIsInN1YiI6IjY0YzlmYzlmYmYwOWQxMDBhZTRkM2M5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2oiF6VGy-1wtIPCpxid9QaJhhF0uXdIy4ZDy7EPvEtg",
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default function Movies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let page = 1;

  const fetchMoreData = () => {
    if (loading) return;

    setLoading(true);

    getMovieList(page)
      .then((res) => {
        setData((prevData) => [...prevData, ...res.results]);
        page += 1;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleScroll = () => {
    console.log("window.innerHeight + document.documentElement.scrollTop");
    console.log(window.innerHeight + document.documentElement.scrollTop);
    console.log("document.documentElement.offsetHeight");
    console.log(document.documentElement.offsetHeight);
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      fetchMoreData();
    }
  };

  useEffect(() => {
    fetchMoreData();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="movies-container">
        {data.map((item, i) => {
          return (
            <Movie
              key={i}
              title={item.title}
              posterPath={item.poster_path}
              voteAverage={item.vote_average}
              overview={item.overview}
              backdropPath={item.backdrop_path}
            />
          );
        })}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}
