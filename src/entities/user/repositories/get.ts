import { prisma } from "@/shared/lib/db";

interface WhereGet {
    id: string;
    login: string;
}

export const getUser = async (where: WhereGet) => {
    const user = await prisma.user.findUnique({ where });

    return user;
};
