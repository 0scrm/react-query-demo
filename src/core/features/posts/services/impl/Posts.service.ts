import { AxiosInstance, AxiosPromise } from "axios";
import { IPostsService } from "core/features/posts/services/IPosts.service";
import { Post } from "core/api/models/Post";
import { PostPayload } from "core/types/PostPayload.type";

export class PostsService implements IPostsService {
    constructor(private api: AxiosInstance) {}

    getPosts = (): AxiosPromise<Array<Post>> => {
        return this.api.get("/articles?sortBy=createdAt&order=desc");
    };

    createPost = (payload: PostPayload): AxiosPromise<Post> => {
        return this.api.post("/articles", payload);
    };

    deletePost = (id: string): AxiosPromise<Post> => {
        return this.api.delete(`/articles/${id}`);
    };
}
