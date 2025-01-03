import { Container } from "@/shared/ui/container";
import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Container className="flex justify-between gap-16">
            {children}
        </Container>
    );
};
