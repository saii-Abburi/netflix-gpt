import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailerVideo } from "../utils/MoviesSlice";

const useMovieTrailer = (id)=>{
    const dispatch = useDispatch();
    const movieTrailer = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
        // console.log(json);
    
        const trailer =
          json.results.filter((video) => video.type === "Trailer") &&
          json.results.filter((video) => video.name === "Official Trailer");
        if (trailer.length == 0) {
          trailer = json.results[0];
        }
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer[0]))
      };
    
      useEffect(() => {
        movieTrailer();
      }, [  ]);
}

export default useMovieTrailer