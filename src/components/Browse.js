import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopratedTvShows from "../hooks/useTopratedTvShows";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import FrequentQuestions from "./FrequentQuestions";
import Footer from "./Footer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();
  useTopratedTvShows();
  const showgptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {showgptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <div className="body">
          <SecondaryContainer />
          <FrequentQuestions/>
          <Footer/>
          </div>
        </>
      )}
    </div>
  );
};

export default Browse;
