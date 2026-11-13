
import React, { useState } from 'react';
import Header from './components/Header.jsx';
import MovieCard from './components/MovieCard.jsx';
import MovieDialog from './components/MovieDialog.jsx';
import { movies } from './data/movies.js';

// I have used separate React components to organise my webpage.
// This makes the code easier to read and manage.

function App() {

  // I use these states to control the movie categories,
  // search box and selected movie.
  const [category, setCategory] = useState('All');
  const [searchText, setSearchText] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  // I use filter() to display movies that match the
  // selected category and the user's search.

  const filteredMovies = movies.filter((movie) => {

    const categoryMatches =
      category === 'All' || movie.category === category;

    const searchMatches =
      `${movie.title} ${movie.year} ${movie.description}`
        .toLowerCase()
        .includes(searchText.trim().toLowerCase());

    return categoryMatches && searchMatches;
  });

  // I check if the user is viewing all movies without
  // using a category or search filter.
  const showingAll =
    category === 'All' && searchText.trim() === '';

  // This function resets the filters when the user
  // clicks the SHOW ALL button.
  function showAll() {
    setCategory('All');
    setSearchText('');
  }

  return (
    <>
      {/* I pass the category and search details to the Header. */}
      <Header
        category={category}
        setCategory={setCategory}
        searchText={searchText}
        setSearchText={setSearchText}
        onShowAll={showAll}
      />

      {/* This is the main section where the movies are displayed. */}
      <main id="movies" className="movies-container">

        <div
          className={`movie-grid ${
            showingAll ? 'movie-grid--default' : ''
          }`}
        >
          {/* I use map() to display each movie using MovieCard. */}
          {filteredMovies.map((movie, index) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              index={index}
              showingAll={showingAll}
              onWatch={setSelectedMovie}
            />
          ))}
        </div>

        {/* I display this message if no movies match the search. */}
        {filteredMovies.length === 0 && (
          <p className="empty-state">
            No movies found. Try another title or category.
          </p>
        )}

      </main>

      {/* I use MovieDialog to show details of the selected movie.
          The close button resets the selected movie and closes it. */}
      <MovieDialog
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </>
  );
}

export default App;

