import React from 'react'
import { IMG_CDN_URL_780} from '../utils/Constants'
import GenreMapping from './GenreMapping'

const TotalCard = ({img , movie }) => {
    console.log(movie)
  return (
    <div className='totalmoivecard'>
        <img alt='MovieImage' src={IMG_CDN_URL_780+img}></img>
        <div>
        <h1>{movie.original_title}</h1>
        <ul>
            <li>{movie?.release_date?.split('-')[0] || ' '}</li>
            <li>{(!movie.adult)?  'U/A 13+' : 'A'}</li>
            <GenreMapping genreIds = {movie.genre_ids}/>
        </ul>
        <p>{movie.overview}</p>

        <button>Get Started &gt;</button>
        <p>Create or start a membership</p>
        </div>
    </div>
  )
}

export default TotalCard