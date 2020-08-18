import React, { useEffect } from 'react';
import LoaderAnimation from './MoviesLoaderAnimation';
import MoviesSingle from './MoviesSearchSingle';
import MoviesPagination from './MoviesPagination';

const MoviesSearchList = ({
  movies,
  loading,
  totalPages,
  setPopUp,
  getPage,
}) => {
  useEffect(() => {});
  return (
    <div className='d-flex flex-column align-items-center'>
      {totalPages ? (
        <MoviesPagination
          pages={totalPages}
          getPage={getPage}></MoviesPagination>
      ) : (
        <></>
      )}
      <div className='container row'>
        {loading ? (
          <LoaderAnimation pages={totalPages}></LoaderAnimation>
        ) : movies ? (
          movies.length > 0 ? (
            movies.map((item, index) => (
              <MoviesSingle
                key={index}
                movie={item}
                getMovieByIdShort
                setPopUp={setPopUp}></MoviesSingle>
            ))
          ) : (
            <h3>Nothing Found</h3>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MoviesSearchList;
