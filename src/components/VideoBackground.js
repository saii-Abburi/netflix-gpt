import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  // fetch the trailer
  useMovieTrailer(id);

  return (
    <div  className="videoBackground">
      <iframe
         width="100%"
         height="100%"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?autoplay=1&mute=1"}
        frameBorder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
