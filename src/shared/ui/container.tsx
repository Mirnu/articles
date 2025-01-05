import { cn } from "@/shared/lib/css";
import { FC, PropsWithChildren } from "react";

interface Props {
    className?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({
    className,
    children,
}) => {
    return (
        <div className={cn("container mx-auto px-4 max-w-[1200px]", className)}>
            {children}
        </div>
    );
};
