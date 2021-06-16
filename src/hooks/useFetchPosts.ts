import { postsSlice } from "core/features/posts/Posts.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useFetchPosts = () => {
    const dispatch = useDispatch();

    const { fetchPosts } = postsSlice.actions;

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch, fetchPosts]);

    return;
};
