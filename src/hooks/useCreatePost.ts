import { Post } from "core/api/models/Post";
import { postsSlice } from "core/features/posts/Posts.slice";
import { PostPayload } from "core/types/PostPayload.type";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useCreatePost = (payload: Pick<Post, "body" | "title">) => {
    const dispatch = useDispatch();
    console.log("useCreatePost");
    const { createPost } = postsSlice.actions;
    const post: PostPayload = { ...payload, createdAt: new Date().toISOString() };

    useEffect(() => {
        dispatch(createPost(post));
    }, [dispatch, createPost, payload]);

    return;
};
