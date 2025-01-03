import { left, right } from "@/shared/lib/either";
import cuid from "cuid";
import { passwordService } from "./password";
import { getUser } from "../repositories/get-user";
import { saveUser } from "../repositories/save-user";
import { UserErrors } from "@/kernel/errors/user";

export const createUser = async ({
    login,
    password,
}: {
    login: string;
    password: string;
}) => {
    const userWithLogin = await getUser({ login });

    if (userWithLogin) {
        return left(UserErrors.USER_ALREADY_EXISTS);
    }

    const { hash, salt } = await passwordService.hashPassword(password);

    const user = await saveUser({
        id: cuid(),
        login,
        passwordHash: hash,
        salt,
    });

    return right(user);
};
