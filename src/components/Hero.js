import React, { useState, useEffect } from 'react';
import Data from '../data/db.json';
import '../css/_hero.scss';

function Hero({ selectedId }) {
  const [selectedMovie, setSelectedMovie] = useState({});

  const getMovie = () => {
    let movie = Data.results.find((movie) => movie.id === selectedId);
    setSelectedMovie(movie);
  };

  useEffect(() => {
    getMovie();
  }, [selectedId]);

  return (
    <>
      {selectedMovie != null && (
        <header
          className="hero"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url("${selectedMovie.backdrop_path}")`,
            backgroundPosition: 'center center',
          }}
        >
          <div className="hero-contents">
            <h1 className="hero-title">{selectedMovie.title}</h1>
            <h2 className="hero-rating">
              Rating {selectedMovie.vote_average}/10
            </h2>

            <h1 className="hero-description">{selectedMovie.overview}</h1>
          </div>
        </header>
      )}
    </>
  );
}

export default Hero;
