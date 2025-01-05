"use client";

import { FC } from "react";
import useSWR from "swr";
import { ArticleCard } from "@/features/article-card";
import { getArticles } from "../actions/get-articles";

interface Props {
    index: number;
}

export const ArticlePage: FC<Props> = ({ index }) => {
    const { data } = useSWR(`articles/${index}`, () => getArticles(index), {
        refreshInterval: 3600000,
    });

    if (data === undefined || data.length === 0) return null;

    return (
        <div className="flex flex-col mt-8 gap-4">
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
