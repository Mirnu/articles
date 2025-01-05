"use client";

import { FC, useState } from "react";
import { ArticlePage } from "./article-page";
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
            <h1>Статьи</h1>
            <div className="flex flex-col gap-4">{pages}</div>
            <Button onClick={() => setCount(count + 1)}>Дальше</Button>
        </div>
    );
};
