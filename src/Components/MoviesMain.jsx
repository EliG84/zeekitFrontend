import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import * as Api from '../Services/ApiService';
import SearchInput from './MoviesSearchInput';
import MoviesSearchList from './MoviesSearchList';
import MoviePopUp from './MoviePopUp';
import '../Style/style.css';

const MoviewMain = (props) => {
  const [movies, setMovies] = useState(null);
  const [movieById, setMoveById] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(null);
  const [showHidePopUp, setShowHidePopUp] = useState(false);
  const [getSearch, setSearch] = useState('');
  const [getPage, setPage] = useState(1);

  let history = useHistory();

  useEffect(() => {
    if (props.location.pathname === '/') {
      setPage(1);
      setSearch('');
      setMovies(null);
    } else if (props.location.pathname === '/search') {
      setMovies(null);
      setTotalPages(null);
      setLoading(true);
      Api.apiSearchAll(props.location.search).then((data) => {
        if (data.Response === 'True') {
          setLoading(false);
          setMovies([...data.Search]);
          setTotalPages(Math.ceil(data.totalResults / 10));
        } else {
          setLoading(false);
          setMovies([]);
        }
      });
    }
  }, [props.location.pathname, props.location.search]);

  const getSearchValue = (value) => {
    history.push(`/search?s=${value}&page=${getPage}`);
    setSearch(value);
  };

  const getPageValue = (value) => {
    if (getSearch === '') value = 1;
    history.push(`/search?s=${getSearch}&page=${value}`);
    setPage(value);
  };

  const togglePopUp = (show, movieId, type = '') => {
    if (!show) {
      setMoveById(null);
      return setShowHidePopUp(show);
    }
    setShowHidePopUp(show);
    setMoveById(null);
    switch (type) {
      case 'long':
        return Api.apiGetSingleLong(movieId).then((data) => {
          setMoveById(data);
        });

      default:
        return Api.apiGetSingleShort(movieId).then((data) => {
          setMoveById(data);
        });
    }
  };

  return (
    <div
      className={
        movies || loading ? 'd-flex flex-column align-items-center' : 'starter'
      }>
      {showHidePopUp ? (
        <div className='dark' onClick={() => setShowHidePopUp(false)}></div>
      ) : (
        <></>
      )}
      <SearchInput getSearch={getSearchValue}></SearchInput>
      {showHidePopUp ? (
        <MoviePopUp movie={movieById} setPopUp={togglePopUp}></MoviePopUp>
      ) : (
        <></>
      )}
      <Switch>
        <Route
          exact
          path='/search'
          render={() => (
            <MoviesSearchList
              movies={movies}
              totalPages={totalPages}
              getPage={getPageValue}
              loading={loading}
              setPopUp={togglePopUp}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default MoviewMain;
