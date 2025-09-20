import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector((store) => store?.movies?.addTrailer?.[0]);
  useTrailer(movieId);

  const embedded_url = `https://www.youtube.com/embed/${trailerId?.key}`;
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={embedded_url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
