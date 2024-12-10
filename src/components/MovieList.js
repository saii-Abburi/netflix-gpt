import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  // console.log(movies[0]?.poster_path);
  return (
    <div>
      <div className="moviescarousel">
        <h1>{title}</h1>
        <div className="moviescardlist">
          <ul>
            {movies &&
              movies.map((movie , index) => (
                <MovieCard key={movie.id} img={movie.poster_path} movie = {movies[index]}/>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
