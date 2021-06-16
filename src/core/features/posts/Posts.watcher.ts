import { takeEvery, takeLatest } from "redux-saga/effects";
import { postsSlice } from "./Posts.slice";

import { createPostSaga, deletePostSaga, getPostsSaga } from "./Posts.saga";

const { fetchPosts, createPost, deletePost } = postsSlice.actions;

export function* watchPosts() {
    yield takeLatest(fetchPosts, getPostsSaga);
    yield takeLatest(createPost, createPostSaga);
    yield takeEvery(deletePost, deletePostSaga);
}
