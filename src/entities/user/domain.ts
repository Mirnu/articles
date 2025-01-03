import { Article } from "../article";
import { Comment } from "../comment";

export interface User {
    id: string;
    login: string;
    passwordHash: string;
    salt: string;

    articles: Article[];
    comments: Comment[];
}
