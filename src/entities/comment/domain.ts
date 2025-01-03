import { Article } from "../article";
import { User } from "../user";

export interface Comment {
    id: string;
    body: string;

    article: Article;
    author: User;
}
