import { CommentEntity } from "../comment";
import { UserEntity } from "../user/server";

export type ArticleEntity = {
    id: string;
    title: string;
    description: string;
    body: string;
    tags: ArticleTag[];

    comments: CommentEntity[];

    author: UserEntity;
};

export enum ArticleTag {
    Frontend = "Frontend",
    Backend = "Backend",
    Fullstack = "Fullstack",
    Devops = "Devops",
    Mobile = "Mobile",
    Other = "Other",
}
