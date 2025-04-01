import React from 'react';

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <p className="text-center">No movies found.</p>;
  }

  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-md-4 mb-4" key={movie.imdbID}>
          <div className="card h-100">
            <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{movie.Title} ({movie.Year})</h5>
              <p className="card-text">Genre: {movie.Genre}</p>
              <p className="card-text">Rating: {movie.imdbRating}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
