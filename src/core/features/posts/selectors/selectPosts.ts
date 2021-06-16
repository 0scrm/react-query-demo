import { RootState } from "core/Root.state";

import { PostsState } from "core/features/posts/Posts.state";

export const selectPosts = ({ posts }: RootState): PostsState => posts;
