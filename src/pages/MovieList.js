import React from "react";
import PropTypes from "prop-types";
import { IMG_BASE_URL } from "../components/Movie";
import "./MovieList.css";

export default function MovieList({ posterPath, releaseDate, title }) {
  return (
    <div className="MovieList">
      <img src={IMG_BASE_URL + posterPath} alt={title} className="M-main" />
      <div className="M-List">
        <p className="M-T">{title}</p>
        <span className="M-R">{releaseDate}</span>
      </div>
    </div>
  );
}

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
};
