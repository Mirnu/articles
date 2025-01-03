import { ArticleEntity } from "../article";
import { UserEntity } from "../user/server";

export type CommentEntity = {
    id: string;
    body: string;

    article: ArticleEntity;
    author: UserEntity;
};
