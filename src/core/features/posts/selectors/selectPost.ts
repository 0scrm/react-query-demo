import { RootState } from "core/Root.state";

import { createSelector, Selector } from "@reduxjs/toolkit";
import { Post } from "core/api/models/Post";
import { selectPosts } from "./selectPosts";

export const selectPost = (id: string): Selector<RootState, Post | undefined> =>
    createSelector(selectPosts, (posts) => posts.data?.find((post) => post.id === id));
