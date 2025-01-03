import { ArticleEntity } from "../article";
import { CommentEntity } from "../comment";

export type UserId = string;

export type UserEntity = {
    id: UserId;
    login: string;
    passwordHash: string;
    salt: string;

    articles?: ArticleEntity[];
    comments?: CommentEntity[];
};

export type SessionEntity = {
    id: UserId;
    login: string;
    expiredAt: string;
};
