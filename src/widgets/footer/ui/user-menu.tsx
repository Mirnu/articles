import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { FC } from "react";

export const UserMenu: FC = async () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>Открыть</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Профиль</DropdownMenuItem>
                <DropdownMenuItem>Выйти</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
