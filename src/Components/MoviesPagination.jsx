import React, { useState, useEffect } from 'react';

import '../Style/style.css';

const MoviesPagination = ({ pages, getPage }) => {
  let [start] = useState(0);
  let [end, setEnd] = useState(10);

  useEffect(() => {
    if (pages < 10) {
      setEnd(pages);
    }
  });

  return (
    <div className='row justify-content-center my-2'>
      {Array.from(Array(pages))
        .filter((_, i) => i > start && i <= end)
        .map((_, i) => (
          <button
            onClick={() => {
              getPage(i + 1);
            }}
            className='btn btn-sm btn-outline-success mx-1 border border-0 font-weight-bold'
            key={i}>
            {i + 1}
          </button>
        ))}
    </div>
  );
};

export default MoviesPagination;
