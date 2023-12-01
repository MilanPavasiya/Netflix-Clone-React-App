import React from 'react';
import Data from '../data/db2.json';
import { useState, useEffect } from 'react';
import SingleContent from './SingleContent';

const MovieList = ({ heading }) => {
  const [content, setContent] = useState([]);

  const fetchMovies = () => {
    setContent(Data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // console.log(content);
  return (
    <>
      <div className="content">
        <div className="content-container">
          <h2>{heading}</h2>
          {content.map((movie, index) => (
            <SingleContent
              key={movie.id}
              poster={movie.poster_path}
              backdrop={movie.backdrop_path}
              title={movie.title || movie.original_title}
              description={movie.overview}
              date={movie.release_date}
              rating={movie.vote_average}
              isLargeRow
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
