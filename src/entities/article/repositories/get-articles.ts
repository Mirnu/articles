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
    const skip = page * take;

    return prisma.article.findMany({
        ...args,
        skip,
        take,
        include: { author: true },
    });
};
