import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const SearchInput = ({ getSearch }) => {
  let inputRef = useRef(null);
  let history = useHistory();

  const onInput = () => {
    if (inputRef.current.value === '') {
      return history.push('/');
    }
    getSearch(inputRef.current.value);
  };

  return (
    <div className='col row justify-content-center'>
      <h2>Search For Movies</h2>
      <input
        ref={inputRef}
        onInput={onInput}
        type='text'
        className='form-control col-10'
      />
    </div>
  );
};

export default SearchInput;
