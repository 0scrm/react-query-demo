import { combineReducers } from "@reduxjs/toolkit";
import { postsSlice } from "./features/posts/Posts.slice";

export const RootReducer = combineReducers({
    posts: postsSlice.reducer
});
