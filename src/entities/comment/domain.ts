import { Article } from "../article";
import { User } from "../user/server";

export type Comment = {
    id: string;
    body: string;

    article: Article;
    author: User;
};
