import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div>
      <div className="m-36 px-6">
        <h1 className="text-7xl font-extrabold font-stretch-ultra-condensed%">
          {title}
        </h1>
        <p className="py-6 text-2xl">{overview}</p>
      <button className="p-3 w-26 text-white bg-gray-600 font-bold border-2 rounded-xl cursor-pointer">
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
