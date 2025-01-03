import { Comment } from "../comment";
import { User } from "../user/server";

export type Article = {
    id: string;
    title: string;
    body: string;

    comments: Comment[];
    author: User;
};
