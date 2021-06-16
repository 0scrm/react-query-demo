import { Post } from "core/api/models/Post";
import { CrudState } from "core/interfaces/CrudState";

export interface PostsState extends CrudState {
    data: Array<Post>;
}
