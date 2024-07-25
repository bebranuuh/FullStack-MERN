import { configureStore } from "@reduxjs/toolkit";
import { PostReducer } from "./slices/posts";
import { authReducer } from "./slices/auth";

const store = configureStore({
  reducer: {
    posts: PostReducer,
    auth: authReducer,
  },
});

export default store;
