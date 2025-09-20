import React, { useEffect } from "react";
import { addTrailer } from "../Utilis/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../Utilis/constant";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  //fetch trailer--> api call--> movie

  useEffect(() => {
    if (movieId === null) return;

    const video = async () => {
      const videoData = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
      );
      const data = await videoData.json();

      const filterdata = data.results.filter(
        (video) => video.type === "Trailer"
      );

      const trailer = filterdata.length ? filterdata : data.results[0];

      console.log(trailer);
      dispatch(addTrailer(trailer));
    };
    video();
  }, [movieId, dispatch]);

  return (
    <div>
      <p>joi sakjfas</p>
    </div>
  );
};

export default useTrailer;
