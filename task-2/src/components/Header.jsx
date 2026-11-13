import React from 'react';
const categories = ['Action', 'Comedy', 'Romance', 'Drama'];

function Header({ category, setCategory, searchText, setSearchText, onShowAll }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#movies" onClick={onShowAll}>watch.it</a>
        <nav className="genre-nav" aria-label="Movie categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`genre-link ${category === item ? 'selected' : ''}`}
              aria-pressed={category === item}
              onClick={() => setCategory(category === item ? 'All' : item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="header-tools">
          <label className="search-label" htmlFor="movie-search">Search movies by title</label>
          <div className="search-row">
            <input
              id="movie-search"
              className="search-field"
              type="search"
              placeholder="e.g. Barbie"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
            <button className="search-button" type="button" onClick={onShowAll}>SHOW ALL</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
