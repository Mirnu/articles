import { CommentEntity } from "../comment";
import { UserEntity } from "../user/server";

export type ArticleEntity = {
    id: string;
    title: string;
    body: string;

    comments: CommentEntity[];

    author: UserEntity;
};
