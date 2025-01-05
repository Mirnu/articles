import { routes } from "@/kernel/routes";
import Link from "next/link";
import { FC } from "react";
import { Layout } from "../ui/layout";
import { UserMenu } from "../ui/user-menu";

export const Header: FC = () => {
    return (
        <Layout>
            <div>
                <Link href={routes.home()} className="text-2xl">
                    Habr
                </Link>
            </div>
            <div className="flex gap-4 items-center">
                <Link href={routes.home()}>Лента</Link>
                <UserMenu />
            </div>
        </Layout>
    );
};
