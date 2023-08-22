import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { IMG_BASE_URL } from "../components/Movie";
import "./MovieDetail.css";

export default function MovieDetail() {
  const { state } = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref);
    ref.current.style.backgroundImage = `url(${IMG_BASE_URL}${state.backdropPath})`;
  }, []);

  return (
    <div className="M-Wrap-cotainer" ref={ref}>
      <div className="M-container">
        <img
          className="M-poster_path"
          src={IMG_BASE_URL + state.posterPath}
          alt="영화 포스터 이미지"
        />
        <div>
          <div className="M-title">{state.title}</div>
          <div className="text">개요</div>
          <div className="M-overview">{state.overview}</div>
        </div>
      </div>
    </div>
  );
}
