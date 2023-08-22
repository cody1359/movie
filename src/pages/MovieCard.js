import React from "react";
import "./MovieCard.css";
import MovieList from "./MovieList";

function MovieCard() {
  const MovieData = [
    {
      poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
      release_date: "2023-06-06",
      title: "Transformers: Rise of the Beasts",
    },
    {
      poster_path: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      release_date: "2023-06-13",
      title: "The Flash",
    },
    {
      poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      release_date: "2023-07-19",
      title: "Barbie",
    },
    {
      poster_path: "/mvjqqklMpHwOxc40rn7dMhGT0Fc.jpg",
      release_date: "2023-07-14",
      title: "The Flood",
    },
    {
      poster_path: "/d07phJqCx6z5wILDYqkyraorDPi.jpg",
      release_date: "2023-07-05",
      title: "Insidious: The Red Door",
    },
    {
      poster_path: "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
      release_date: "2023-08-02",
      title: "Meg 2: The Trench",
    },
    {
      poster_path: "/zsbolOkw8RhTU4DKOrpf4M7KCmi.jpg",
      release_date: "2023-07-06",
      title: "Hidden Strike",
    },
    {
      poster_path: "/gD72DhJ7NbfxvtxGiAzLaa0xaoj.jpg",
      release_date: "2023-06-15",
      title: "No Hard Feelings",
    },
    {
      poster_path: "/xzAQ28moSPEZxOHJ7WL1mX6hb5H.jpg",
      release_date: "2023-06-22",
      title: "Resident Evil: Death Island",
    },
    {
      poster_path: "/1YYL1OcgjPLjAGi6n0iZe1gdl9i.jpg",
      releaseDate: "2023-06-14",
      title: "Elemental",
    },
    {
      poster_path: "/fzDIKaIhMRCczXhmxXxVnJKfDBV.jpg",
      releaseDate: "2023-07-05",
      title: "Miraculous: Ladybug & Cat Noir, The Movie",
    },
    {
      poster_path: "/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg",
      release_date: "2023-06-28",
      title: "Ruby Gillman, Teenage Kraken",
    },
    {
      poster_path: "/4XLZS2xvdv5rxizzTUVREtRyw95.jpg",
      release_date: "2023-07-21",
      title: "Fear the Night",
    },
    {
      poster_path: "/9dTO2RygcDT0cQkawABw4QkDegN.jpg",
      release_date: "2023-03-17",
      title: "Shin Kamen Rider",
    },
    {
      poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      release_date: "2023-07-19",
      title: "Oppenheimer",
    },
    {
      poster_path: "/50WLieQSV6WSPoNjhf0GabbOeey.jpg",
      release_date: "2023-07-28",
      title: "Kingdom 3: The Flame of Fate",
    },
    {
      poster_path: "/jP2ik17jvKiV5sGEknMFbZv7WAe.jpg",
      release_date: "2023-06-30",
      title: "Warhorse One",
    },
    {
      poster_path: "/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg",
      release_date: "2023-03-02",
      title: "Mavka: The Forest Song",
    },
    {
      poster_path: "/kw0Hegzpg08v37nRcmczCvqpl7d.jpg",
      release_date: "2023-07-26",
      title: "Talk to Me",
    },
    {
      poster_path: "/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg",
      release_date: "2023-04-27",
      title: "Knights of the Zodiac",
    },
  ];

  return (
    <div className="M-Card">
      {MovieData.map((v, i) => {
        return (
          <MovieList
            key={i}
            posterPath={v.poster_path}
            releaseDate={v.release_date}
            title={v.title}
          />
        );
      })}
    </div>
  );
}

export default MovieCard;
