import { Container } from "@/shared/ui/container";
import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="border-b bg-secondary">
            <Container className="flex justify-between gap-16 py-4 items-center">
                {children}
            </Container>
        </div>
    );
};
