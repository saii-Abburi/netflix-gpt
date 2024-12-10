import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    <div className='contentcontainer'>
      <MovieList title={"Now playing"} movies= {movies?.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies= {movies?.popularMovies}/>
      <MovieList title={"Top Rated"} movies= {movies?.topRatedMovies}/>
      <MovieList title={"Upcoming Movies "} movies= {movies?.upcomingMovies}/>
      <MovieList title={"Toprated Tv Shows"} movies= {movies?.topratedTvShows}/>
    </div>
  )
}

export default SecondaryContainer