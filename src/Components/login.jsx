import { useRef, useState } from "react";
import Header from "./Header";
import { Validation } from "./Formvalidation";
import { auth } from "../Utilis/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignedIn, setisSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonSubmit = () => {
    let message = Validation(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message) {
      return;
    }
    if (!isSignedIn) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
       C

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
      

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const signedin = () => {
    setisSignedIn(!isSignedIn);
  };

  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg"
          alt="bgimg"
        ></img>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute top-0 left-0 z-10 w-full">
          <Header />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-black/70 rounded-lg flex flex-col  w-6/24 m-3 p-6 text-white"
          >
            <div className="p-6 m-3">
              <h1 className="text-3xl font-bold mb-8 ">
                {isSignedIn ? "Sign In" : "Sign Up"}
              </h1>
              <input
                ref={email}
                placeholder="Email or mobile number"
                type="text"
                className="mb-4 p-5 w-full placeholder-gray-200 focus:outline-white  bg-zinc-900 rounded"
              ></input>
              <input
                ref={password}
                placeholder="Password"
                type="password"
                className="p-5 mb-6 w-full bg-zinc-900 rounded text-white placeholder-gray-400 focus:outline-white"
              ></input>
              {!isSignedIn && (
                <input
                  placeholder="Confirm Password"
                  type=""
                  className="p-5 mb-6 w-full bg-zinc-900 rounded text-white placeholder-gray-400 focus:outline-white"
                ></input>
              )}
              <p className="text-red-600">{errorMessage}</p>
              <button
                type="submit"
                className=" w-full bg-red-600 hover:bg-red-700 font-semibold py-3 rounded mb-4 cursor-pointer"
                onClick={handleButtonSubmit}
              >
                {isSignedIn ? "Sign In" : "Sign Up"}
              </button>
              <p className="text-cent er pb-3">OR</p>
              {isSignedIn ? (
                <button className="w-full bg-gray-600 hover:bg-gray-500 py-3 rounded mb-4">
                  "Use a Sign-in Code"
                </button>
              ) : (
                ""
              )}
              <a
                href=""
                className="text-center text-lg  text-gray-300 underline block pb-6"
              >
                Forget Password?
              </a>
              <div className="flex items-center justify-between text-sm mb-6">
                <label className="flex items-center gap-2 text-lg ">
                  <input
                    type="checkbox"
                    className="accent-red-600 text-5xl cursor-pointer"
                  />
                  Remember me
                </label>
              </div>
              <p>
                {isSignedIn ? "New To Netflix" : "Already registered "}

                <a
                  className="font-bold hover:underline cursor-pointer"
                  onClick={signedin}
                >
                  {isSignedIn ? "Sign Up" : "Sign in now"}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
