import React from 'react';
import LoaderAnimation from './MoviesLoaderAnimation';

const MoviePopUp = ({ movie, setPopUp }) => {
  return movie ? (
    <div className='dark_box'>
      <div className='close' onClick={() => setPopUp(false, null)}>
        X
      </div>
      <img
        className='card-img-top mt-1'
        src={movie.Poster === 'N/A' ? '/default.jpg' : movie.Poster}
        alt={movie.Title}
      />
      <div className='card-body'>
        <h5 className='card-title'>{movie.Title}</h5>
        <h5>Release: {movie.Year}</h5>
        <p className='card-text plotScrol'>{movie.Plot}</p>
        <div className='d-flex justify-content-around'>
          <button onClick={() => setPopUp(true, movie.imdbID, 'long')}>
            Get More info
          </button>
          <button onClick={() => setPopUp(false, null)}>Close</button>
        </div>
      </div>
    </div>
  ) : (
    <div className='dark_box'>
      <LoaderAnimation></LoaderAnimation>
    </div>
  );
};

export default MoviePopUp;
