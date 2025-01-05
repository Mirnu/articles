import { sessionService } from "@/entities/user/server";
import { Button } from "@/shared/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { redirect } from "next/navigation";
import { FC } from "react";

export const UserMenu: FC = async () => {
    const { isAuth } = await sessionService.verifySession({});

    return isAuth === true ? (
        <>
            <div>{isAuth}</div>{" "}
            <DropdownMenu>
                <DropdownMenuTrigger>Открыть</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Профиль</DropdownMenuItem>
                    <DropdownMenuItem>Выйти</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    ) : (
        <form
            action={async () => {
                "use server";
                redirect("/sign-in");
            }}
        >
            <Button variant="outline" size="sm">
                Авторизироваться
            </Button>
        </form>
    );
};
