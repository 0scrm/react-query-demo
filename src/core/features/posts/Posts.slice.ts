import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Post } from "core/api/models/Post";
import { PostPayload } from "core/types/PostPayload.type";
import { initialState } from "./InitialState";

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        fetchPosts: (state) => {
            state.isLoading = true;
        },
        fetchPostsSuccess: (state, { payload }: PayloadAction<Array<Post>>) => {
            state.isLoading = false;
            state.data = payload;
        },
        fetchPostsFailure: (state, { payload }: PayloadAction<string>) => {
            state.isLoading = false;
            state.hasError = true;
            state.errorMessage = payload;
        },
        createPost: (state, { payload }: PayloadAction<PostPayload>) => {
            state.isLoading = true;
        },
        createPostSuccess: (state, { payload }: PayloadAction<Post>) => {
            state.isLoading = false;
            state.data = [payload, ...state.data];
        },
        createPostFailure: (state, { payload }: PayloadAction<string>) => {
            state.isLoading = false;
            state.hasError = true;
            state.errorMessage = payload;
        },
        deletePost: (state, { payload }: PayloadAction<string>) => {
            state.isLoading = true;
        },
        deletePostSuccess: (state, { payload }: PayloadAction<Post>) => {
            state.isLoading = false;
            state.data = state.data?.filter(({ id }) => id !== payload.id);
        },
        deletePostFailure: (state, { payload }: PayloadAction<string>) => {
            state.isLoading = false;
            state.hasError = true;
            state.errorMessage = payload;
        }
    }
});
