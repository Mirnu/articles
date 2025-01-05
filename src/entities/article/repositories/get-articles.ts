import { prisma } from "@/shared/lib/db";
import { Prisma } from ".prisma/client";

export const getArticles = async ({
    page,
    take,
    ...args
}: {
    page: number;
    take: number;
} & Omit<Prisma.ArticleFindManyArgs, "skip">) => {
    const skip = (page - 1) * take;

    return prisma.article.findMany({
        ...args,
        skip,
        take,
        include: { author: true },
    });
};
