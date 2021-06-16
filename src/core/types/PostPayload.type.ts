import { Post } from "core/api/models/Post";

export type PostPayload = Pick<Post, "body" | "title" | "createdAt">;
