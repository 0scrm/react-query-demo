import { ApiInstance } from "core/api/Api";
import { PostsService } from "./impl/Posts.service";

export const postService = new PostsService(ApiInstance);
