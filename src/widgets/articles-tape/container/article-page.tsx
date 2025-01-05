"use client";

import { FC } from "react";
import useSWR from "swr";
import { ArticleCard } from "@/features/article-card";
import { ArticleEntity } from "@/entities/article";

interface Props {
    index: number;
}

const fetchData = async (page: number) => {
    const response = await fetch(`http://localhost:3000/api/articles/${page}`);

    return response.json() as Promise<ArticleEntity[]>;
};

export const ArticlePage: FC<Props> = ({ index }) => {
    const { data } = useSWR(`articles/${index}`, fetchData, {
        refreshInterval: 3600000,
    });

    return (
        <div>
            {data?.map((article, i) => (
                <ArticleCard
                    title={article.title}
                    description={article.description}
                    tags={article.tags}
                    author={article.author}
                    key={i}
                />
            ))}
        </div>
    );
};
