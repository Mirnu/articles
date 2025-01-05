import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            login: "admin3",
            passwordHash: "admin",
            salt: "admin",
        },
    });

    await prisma.article.create({
        data: {
            title: "Hello World",
            body: "Lorem ipsum",
            authorId: user.id,
            description: "Blah blah blah",
            tags: ["Backend", "Other"],
        },
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
