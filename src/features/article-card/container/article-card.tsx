import { ArticleEntity } from "@/entities/article";
import { FC } from "react";

export const ArticleCard: FC<
    Omit<ArticleEntity, "comments" | "id" | "body">
> = ({ title, description, tags, author }) => {
    return (
        <div className="border-b flex flex-col gap-4">
            <h1 className="text-xl">{title}</h1>
            <p>{author.login}</p>
            <p className="text-gray-600">{description}</p>
            <p>{tags.join(", ")}</p>
        </div>
    );
};
