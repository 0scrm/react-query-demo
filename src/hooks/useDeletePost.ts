import { postsSlice } from "core/features/posts/Posts.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useDeletePost = (id: string) => {
    const dispatch = useDispatch();

    const { deletePost } = postsSlice.actions;

    useEffect(() => {
        dispatch(deletePost(id));
    }, [dispatch, deletePost, id]);

    return;
};
