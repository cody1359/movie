import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import HomeBtm from "./HomeBtm";
import MovieCard from "./MovieCard";

export default function Home() {
  const navigate = useNavigate();

  const [word, setWord] = useState("");

  const onClickWord = () => {
    navigate(`/test?sword=${word}`);
  };

  return (
    <div className="H-container">
      <div className="H-card">
        <div className="H-text">
          <span>Welcome.</span>
          <span>
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
        </div>
        <div className="H-input">
          <input
            className="bot"
            placeholder="영화, TV 프로그램, 인물 검색..."
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button className="btn" type="submit" onClick={onClickWord}>
            Search
          </button>
        </div>
      </div>
      <div className="H-btm-1">
        <MovieCard />
      </div>
      <HomeBtm />
    </div>
  );
}
