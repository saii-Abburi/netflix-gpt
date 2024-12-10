import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants'

const MovieCard = ({img}) => {
  return (
    <li>
      <div className='moviecard'>
        <img src={IMG_CDN_URL+img}  alt='Movie Poster'/>
    </div>
    </li>
  )
}

export default MovieCard