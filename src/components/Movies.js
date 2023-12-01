import React from 'react';
import Data from '../data/db.json';
import { useState, useEffect } from 'react';
import '../css/_movies.scss';

const Movies = ({ title, isLargeRow, onclick }) => {
  const [content, setContent] = useState([]);

  const fetchMovies = () => {
    setContent(Data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row-container">
          {content.map((movie, index) => (
            <img
              onMouseOver={() => onclick(movie.id)}
              key={movie.id}
              className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
              src={`${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              title={movie.original_title || movie.title}
              alt="Movie Poster"
            ></img>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
