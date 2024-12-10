import { API_OPTIONS } from '../utils/Constants'
import { useDispatch } from 'react-redux'
import { addTopratedTvShows } from '../utils/MoviesSlice'
import { useEffect } from 'react';

const useTopratedTvShows = () => {
  const dispatch = useDispatch();
  const getTopratedTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopratedTvShows(json.results));
  };

  useEffect(() => {
    getTopratedTvShows();
  }, []);
};
export default useTopratedTvShows;
