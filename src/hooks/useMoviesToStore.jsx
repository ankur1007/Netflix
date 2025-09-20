import { useDispatch } from "react-redux";
import { options } from "../Utilis/constant";
import { addNowPlayingMovies } from "../Utilis/movieSlice";
import { useEffect } from "react";

const useMoviesToStore = () => {
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const movies = await data.json();

    dispatch(addNowPlayingMovies(movies.results));
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
};
export default useMoviesToStore;
