"use server";

import { articleService } from "@/entities/article";

export const getArticles = async (page: number) => {
    return articleService.getLastArticles({ count: 10, page });
};
