import { ArticleEntity } from "../article";
import { CommentEntity } from "../comment";

export type UserEntity = {
    id: string;
    login: string;
    passwordHash: string;
    salt: string;

    articles?: ArticleEntity[];
    comments?: CommentEntity[];
};
