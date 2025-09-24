import React, { useEffect } from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../Utilis/firebase";
import useMoviesToStore from "../hooks/useMoviesToStore";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useMoviesToStore();

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
    <div className="relative">
      <div className="absolute top-0 left-0 z-20 w-full flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent">
        <Header />
        <button
          className=" px-5 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition duration-300 shadow-lg cursor-pointer"
          onClick={handleSignout}
        >
          Sign out
        </button>
      </div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
