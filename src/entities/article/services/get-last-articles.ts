import { ArticleTag } from "../domain";
import { getArticles } from "../repositories/get-articles";

export const getLastArticles = async ({ count = 5, page = 1 }) => {
    const articles = (
        await getArticles({
            take: count,
            orderBy: { createdAt: "desc" },
            page,
        })
    ).map((article) => {
        return {
            ...article,
            tags: article.tags as ArticleTag[],
            author: {
                ...article.author,
                passwordHash: undefined,
                salt: undefined,
            },
        };
    });

    return articles;
};
