import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({
  title,
  posterPath,
  voteAverage,
  overview,
  backdropPath,
}) {
  const navigate = useNavigate();

  const onClickMovieItem = () => {
    navigate(`/movie/${title}`, {
      state: { title, posterPath, voteAverage, overview, backdropPath },
    });
  };

  return (
    <div type="button" className="movie-container" onClick={onClickMovieItem}>
      <img src={IMG_BASE_URL + posterPath} alt="영화포스터" />

      <div className="movie-info">
        <h4>{title}</h4>
        <span>{voteAverage}</span>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  backdropPath: PropTypes.string.isRequired,
};
