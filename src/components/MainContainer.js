import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle.js'


const MainContainer = () => {
    const movies = useSelector(store=> store.movies?.nowPlayingMovies);
    if(movies === null) return;
    
    const mainMovie =   movies[0];
    const {original_title , overview , id} = mainMovie
  return (
    <div className='maincontainer'>
        <VideoTitle title = {original_title} overview = {overview} id= {id}/>
    </div>
  )
}

export default MainContainer