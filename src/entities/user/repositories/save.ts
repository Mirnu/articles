import { prisma } from "@/shared/lib/db";
import { UserEntity } from "../domain";

export const saveUser = (user: UserEntity) => {
    const mapperdUser = {
        ...user,
        articles: {
            connect: user.articles?.map((article) => ({ id: article.id })),
        },
        comments: {
            connect: user.comments?.map((comment) => ({ id: comment.id })),
        },
    };

    return prisma.user.upsert({
        where: {
            id: user.id,
        },
        create: mapperdUser,
        update: mapperdUser,
    });
};
