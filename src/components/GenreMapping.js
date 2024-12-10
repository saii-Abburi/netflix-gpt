import React from 'react';

// Mapping of Genre IDs to Genre Names
const GENRE_MAPPING = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

// Component to display genres
const GenreMapping = ({ genreIds }) => {
  // Convert genre IDs to genre names
  const genreNames = genreIds.map((id) => GENRE_MAPPING[id] || 'Unknown');

  return (
    <ul className='genreclass'>
      {genreNames.map((genre, index) => (
        <li key={index}>{genre}</li>
      ))}
    </ul>
  )
        
};

export default GenreMapping;
