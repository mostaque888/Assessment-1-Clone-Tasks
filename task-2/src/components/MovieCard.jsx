import React from 'react';
function MovieCard({ movie, index, showingAll, onWatch }) {
  const specialLayout = showingAll && index === 0
    ? 'movie-card--featured'
    : showingAll && index >= 3
      ? 'movie-card--horizontal'
      : '';

  return (
    <article className={`movie-card ${specialLayout}`}>
      <img
        className="movie-poster"
        src={movie.poster}
        alt={`${movie.title} film poster`}
        loading={index === 0 ? 'eager' : 'lazy'}
      />
      <div className="movie-info">
        <div className="movie-copy">
          <h2 className="movie-title">{movie.title} ({movie.year})</h2>
          <p className="movie-description">{movie.description}</p>
        </div>
        <button className="watch-button" type="button" onClick={() => onWatch(movie)}>
          WATCH NOW
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
