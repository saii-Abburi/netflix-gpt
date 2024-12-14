import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, OPEN_API_KEY } from "../utils/Constants";
import { addGptMovieResult } from "../utils/GptSlice";

const GptSearchBar = () => {
  const configLanguage = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    // console.log(movie)
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const apiKey = OPEN_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Act as a movie recommendation system. Your task is to suggest personalized movie recommendations based on the following input query: Query: ${searchText.current.value}If the query provides only a genre (e.g., sci-fi), suggest the topmost 10 films in that genre. If actors, directors, or specific movies are mentioned, recommend similar movies featuring those individuals or matching their style. Ensure that the recommendations are popular,only movie names no extra message adn dont need the query too, critically acclaimed, or highly rated in their categories. Format the response strictly as:
                    Movie 1, Movie 2, Movie 3, Movie 4, Movie 5, Movie 6, Movie 7 , Movie 8, Movie 9, Movie 10`;

    try {
      const result = await model.generateContent(prompt);
      console.log(result.response.text());
      const geminiMovies = result.response.text().split(",");

      const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);
      const filteredTmdbResults = tmdbResults.map(movie=>movie[0])
      dispatch(addGptMovieResult(filteredTmdbResults))
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <div className="gptSearchBar">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="gptsearchinput"
          placeholder={lang[configLanguage].gptSearchPlaceholder}
        ></input>
        <button className="gptsearchbtn" onClick={handleGptSearchClick}>
          {lang[configLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
