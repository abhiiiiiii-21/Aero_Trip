import React, { useEffect } from 'react';

const SearchFlight = ({ setTab }) => {
  useEffect(() => {
    setTab("search");
  }, [setTab]);

  return (
    <div>
      Search Flight Content Goes Here
    </div>
  );
};

export default SearchFlight;
