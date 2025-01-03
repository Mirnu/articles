import { Comment } from "../comment";
import { User } from "../user";

export interface Article {
    id: string;
    title: string;
    body: string;

    comments: Comment[];
    author: User;
}
