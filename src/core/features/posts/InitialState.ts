import { PostsState } from "./Posts.state";

export const initialState: PostsState = {
    isLoading: true,
    hasError: false,
    errorMessage: "",
    data: []
};
