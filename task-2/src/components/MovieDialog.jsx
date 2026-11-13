import React from 'react';
import { useEffect } from 'react';

export default function MovieDialog({ movie, onClose }) {
  useEffect(() => {
    if (!movie) return;
    function escapeClose(event) { if (event.key === 'Escape') onClose(); }
    window.addEventListener('keydown', escapeClose);
    return () => window.removeEventListener('keydown', escapeClose);
  }, [movie, onClose]);

  if (!movie) return null;

  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <section
        className="movie-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={`${movie.title} information`}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="dialog-close" type="button" onClick={onClose} aria-label="Close movie information">×</button>
        <h2>{movie.title} ({movie.year})</h2>
        <p>{movie.description}</p>
        <p className="availability-note">This assessment demo does not include movie playback.</p>
      </section>
    </div>
  );
}
