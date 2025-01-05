import { Container } from "@/shared/ui/container";
import { FC } from "react";

export const Footer: FC = () => {
    return (
        <div className="border-t bg-slate-800">
            <Container>
                <div className="flex items-center justify-between">
                    <p>Профиль</p>
                    <p>Хабы</p>
                    <p>Авторы</p>
                    <p>Документы</p>
                </div>
            </Container>
        </div>
    );
};
