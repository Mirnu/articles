"use client";

import { FC, useState } from "react";
import { ArticlePage } from "../container/article-page";
import { Button } from "@/shared/ui/button";

export const Tape: FC = () => {
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
