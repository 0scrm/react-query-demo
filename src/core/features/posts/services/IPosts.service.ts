import { AxiosPromise } from "axios";
import { Post } from "core/api/models/Post";

export interface IPostsService {
    getPosts(): AxiosPromise<Array<Post>>;
    createPost(payload: Post): AxiosPromise<Post>;
    deletePost(id: string): AxiosPromise<any>;
}
