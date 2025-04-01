import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from './reducers/actions';
import movieService from './movieService';
import MovieList from './components/MovieList';
import LoadingIndicator from './components/LoadingIndicator';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      dispatch({ type: FETCH_MOVIES });
      try {
        const movies = await movieService.searchMovies(searchTerm);
        dispatch({ type: FETCH_MOVIES_SUCCESS, payload: movies });
      } catch (error) {
        dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Movie Search App</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a movie..."
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>
      {loading && <LoadingIndicator />}
      {error && <ErrorMessage message={error} />}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
