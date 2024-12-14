import { API_OPTIONS } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTopratedTvShows } from '../utils/MoviesSlice'
import { useEffect } from 'react';

const useTopratedTvShows = () => {
  const dispatch = useDispatch();
  const topRatedTvShows = useSelector(store=>store.movies.topratedTvShows)
  const getTopratedTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopratedTvShows(json.results));
  };

  useEffect(() => {
   !topRatedTvShows && getTopratedTvShows();
  }, []);
};
export default useTopratedTvShows;
