import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector((store) => store?.movies?.addTrailer?.[0]);
  useTrailer(movieId);

  const embedded_url = `https://www.youtube.com/embed/${trailerId?.key}?autoplay=1&mute=1&controls=0&loop=1`;
  return (
    <div>
      <iframe
        className="  w-screen aspect-video object-cover "
        src={embedded_url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
