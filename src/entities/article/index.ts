import { UserEntity } from "../user/";
import { ArticleEntity } from "./domain";

export { articleService } from "./services";

type ClientArticleEntity = Omit<ArticleEntity, "author"> & {
    author: UserEntity;
};
export type { ClientArticleEntity as ArticleEntity };
