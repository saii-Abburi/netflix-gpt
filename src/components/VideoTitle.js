import React from 'react'
import VideoBackground from './VideoBackground'

const VideoTitle = ({title , overview , id}) => {
  return (
    <div className='videotitle'>
      <div className='videotitlecontent'>
      <h1>{title}</h1>
      <p>{overview}</p>
      <div>
        <button>▶  Play</button>
        <button className='video-more-btn'> ℹ  More Info</button>

      </div>
      </div>
      <VideoBackground id= {id}/>
    </div>
  )
}

export default VideoTitle