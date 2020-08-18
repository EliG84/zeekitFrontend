import React from 'react';
import '../Style/style.css';

const MoviesSingle = ({ movie, setPopUp }) => {
  return (
    <div
      onClick={() => {
        setPopUp(true, movie.imdbID);
      }}
      className='card col-lg-3 movieList'>
      <img
        className='card-img-top mt-1'
        src={movie.Poster === 'N/A' ? '/default.jpg' : movie.Poster}
        alt={movie.Title}
      />
      <div className='card-body'>
        <h5 className='card-title'>{movie.Title}</h5>
        <h5>Release: {movie.Year}</h5>
      </div>
    </div>
  );
};

export default MoviesSingle;
