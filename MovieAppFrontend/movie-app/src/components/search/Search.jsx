import React, { useState } from 'react';
import './search.css';

const Search = ({ onSearch }) => {
  const [imdbId, setImdbId] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = {
      imdbId: imdbId || undefined,
      title: title || undefined,
      year: year || undefined,
    };
    onSearch(searchParams);
  };

  return (
    <div className="search-container">
      <h2>Search for a Movie</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="imdbId">IMDb ID:</label>
          <input
            type="text"
            id="imdbId"
            value={imdbId}
            onChange={(e) => setImdbId(e.target.value)}
            placeholder="Enter IMDb ID"
          />
        </div>
        <div>OR</div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter movie title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Enter release year"
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
};

export default Search;
