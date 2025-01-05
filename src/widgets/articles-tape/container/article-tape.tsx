"use client";

import { FC, useState } from "react";
import { ArticlePage } from "../ui/article-page";
import { Button } from "@/shared/ui/button";

export const ArticleTape: FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(1);
    const pages = [];

    for (let i = 0; i < count; i++) {
        pages.push(<ArticlePage key={i} index={i} />);
    }

    return (
        <div>
            <h1 className="text-xl">Статьи</h1>
            <div className="flex flex-col mt-8 gap-4">{pages}</div>
            <Button className="mt-8" onClick={() => setCount(count + 1)}>
                Дальше
            </Button>
        </div>
    );
};
