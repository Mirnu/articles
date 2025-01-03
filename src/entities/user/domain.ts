import { Article } from "../article";
import { Comment } from "../comment";

export type User = {
    id: string;
    login: string;
    passwordHash: string;
    salt: string;

    articles: Article[];
    comments: Comment[];
};
