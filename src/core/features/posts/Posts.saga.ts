import { postService } from "./services";
import { call, put } from "redux-saga/effects";

import { postsSlice } from "./Posts.slice";
import { Post } from "core/api/models/Post";
import { PayloadAction } from "@reduxjs/toolkit";

const {
    fetchPostsSuccess,
    fetchPostsFailure,
    createPostSuccess,
    createPostFailure,
    deletePostSuccess,
    deletePostFailure
} = postsSlice.actions;

export function* getPostsSaga() {
    try {
        const { data, status, error } = yield call(postService.getPosts);
        if (status === 200) {
            yield put(fetchPostsSuccess(data));
        } else {
            yield put(fetchPostsFailure(error.toString()));
        }
    } catch (error) {
        yield put(fetchPostsFailure(error.toString()));
    }
}

export function* createPostSaga({ payload }: PayloadAction<Post>) {
    try {
        const { data, status, error } = yield call(postService.createPost, payload);
        if (status === 201) {
            yield put(createPostSuccess(data));
        } else {
            yield put(createPostFailure(error.toString()));
        }
    } catch (error) {
        yield put(createPostFailure(error.toString()));
    }
}

export function* deletePostSaga({ payload }: PayloadAction<string>) {
    try {
        const { data, status, error } = yield call(postService.deletePost, payload);
        if (status === 200) {
            yield put(deletePostSuccess(data));
        } else {
            yield put(deletePostFailure(error.toString()));
        }
    } catch (error) {
        yield put(deletePostFailure(error.toString()));
    }
}
