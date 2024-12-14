import React from 'react'
import MovieCard from './MovieCard';

const GptMovieSuggestions = ({filteredTmdbResults}) => {
  // console.log(filteredTmdbResults)
  return (
    <div>
      <ul>
        {filteredTmdbResults.map((movie) => {
        const firstMovie = movie;
        return (
          <MovieCard
            img={firstMovie.poster_path}
            key={firstMovie.id}
            movie={firstMovie}
          />
        )
})}
      </ul>
    </div>
  )
}

export default GptMovieSuggestions