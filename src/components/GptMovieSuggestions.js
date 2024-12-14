import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import Shimme from './Shimme'

const GptMovieSuggestions = () => {
  const gpt = useSelector(store=>store.gpt)
  const gptMovies = gpt?.GptMovies
  console.log(gptMovies)
  if(!gptMovies){
    return <Shimme/>
  };
  return (
    <div className='gptMovieList'>
      
      <ul>
        {gptMovies ?(  
          gptMovies.map(movie=> <MovieCard key={movie.id} img={movie?.poster_path} movie={movie} imgtotal={(movie.backdrop_path)? movie.backdrop_path : movie?.poster_path }/>)):
          <p>Please Search For Appropriate Movie Genres</p>}
      </ul>
    </div>
  )
}

export default GptMovieSuggestions