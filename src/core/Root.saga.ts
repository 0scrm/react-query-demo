import { all } from "redux-saga/effects";

import { watchPosts } from "./features/posts/Posts.watcher";

export function* rootSaga() {
    yield all([watchPosts()]);
}
