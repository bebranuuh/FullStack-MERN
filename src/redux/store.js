import { configureStore } from "@reduxjs/toolkit";
import { PostReducer } from "./slices/posts";

const store = configureStore({
  reducer: {
    posts: PostReducer,
  },
});

export default store;
