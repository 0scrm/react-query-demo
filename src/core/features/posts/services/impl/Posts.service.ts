import { AxiosInstance, AxiosPromise } from "axios";
import { IPostsService } from "core/features/posts/services/IPosts.service";
import { Post } from "core/api/models/Post";

export class PostsService implements IPostsService {
    constructor(private api: AxiosInstance) {}

    getPosts = (): AxiosPromise<Array<Post>> => {
        return this.api.get("/articles?sortBy=createdAt&order=desc");
    };

    createPost = (payload: Post): AxiosPromise<Post> => {
        return this.api.post("/articles", payload);
    };

    deletePost = (id: string): AxiosPromise<Post> => {
        return this.api.delete(`/articles/${id}`);
    };
}
