import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './main.css';

const Main = ({ searchParams }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchParams) {
      fetchMovies();
    }
  }, [searchParams]);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
  
    try {
      let response;
      if (searchParams.imdbId) {
        console.log("params: " + searchParams.imdbId)
        response = await axios.get(`http://localhost:8001/movies/imdb/${searchParams.imdbId}`);
        console.log("response: " + JSON.stringify(response.data))
    } else {
        const { title, year } = searchParams;
        response = await axios.get('http://localhost:8001/movies/search', { params: { title, year } });
      }
  
      setMovies(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (err) {
      setError('Movie could not be found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) {
    return (
      <div className="error-message">
        <span>⚠️</span> {error}
      </div>
    );
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-card" onClick={() => console.log(movie.imdbID)}>
          <img src={movie.Poster} alt={movie.Title} />
          <div className="movie-info">
            <h3>{movie.Title}</h3>
            <p><strong className="imdb-rating">IMDb Rating:</strong> {movie.imdbRating}</p>
            <p><strong>Released:</strong> {movie.Released}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;

