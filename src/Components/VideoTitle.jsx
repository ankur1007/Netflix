import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" bg-gradient-to-r from-black/70 to-transparent  w-screen aspect-video absolute ">
      <div className=" pt-[15%]  px-26  text-white">
        <h1 className="text-7xl  font-extrabold font-stretch-ultra-condensed%">
          {title}
        </h1>
        <p className="py-6 text-2xl w-80">{overview}</p>
        <button className="p-3 m-2 w-36 h-auto font-bold text-black  bg-white  cursor-pointer border-2 rounded-xl hover:bg-gray-300 transition">
          ▷ Play
        </button>
        <button className="p-3 text-white bg-gray-600 font-bold border-2 rounded-xl cursor-pointer">
          {" "}
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
