import { routes } from "@/kernel/routes";
import Link from "next/link";
import { FC } from "react";
import { Layout } from "./ui/layout";
import { UserMenu } from "./ui/user-menu";

export const Footer: FC = () => {
    return (
        <Layout>
            <div>
                <h1>Habr</h1>
            </div>
            <div className="flex gap-4">
                <Link href={routes.tape()}>Лента</Link>
                <UserMenu />
            </div>
        </Layout>
    );
};
