-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('Frontend', 'Backend', 'Fullstack', 'Devops', 'Mobile', 'Other');

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "description" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "tags" "Tag"[];
