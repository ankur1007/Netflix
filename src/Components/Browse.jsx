import React, { useEffect } from "react";
import Header from "./Header";

import { signOut } from "firebase/auth";
import { auth } from "../Utilis/firebase";
import { options } from "../Utilis/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utilis/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const movies = await data.json();
    console.log(movies.results);
    dispatch(addNowPlayingMovies(movies.results));
  };
  useEffect(() => {
    getNowPlaying();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-b from-black to-gray-400 shadow-md">
      <Header />
      <button
        className=" px-5 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition duration-300 shadow-lg cursor-pointer"
        onClick={handleSignout}
      >
        Sign out
      </button>
    </div>
  );
};

export default Browse;
