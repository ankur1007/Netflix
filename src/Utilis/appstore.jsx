import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import trailerReducer from "./movieSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    movies: trailerReducer,
  },
});
export default appStore;
