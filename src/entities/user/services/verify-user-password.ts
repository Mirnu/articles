import { left, right } from "@/shared/lib/either";
import { passwordService } from "./password";
import { userRepository } from "../repositories";
import { UserErrors } from "@/kernel/errors/user";

export async function verifyUserPassword({
    login,
    password,
}: {
    login: string;
    password: string;
}) {
    const user = await userRepository.getUser({ login });

    if (!user) {
        return left(UserErrors.INVALID_PASSWORD_OR_LOGIN);
    }

    const isCompare = await passwordService.comparePasswords({
        hash: user.passwordHash,
        salt: user.salt,
        password,
    });

    if (!isCompare) {
        return left(UserErrors.INVALID_PASSWORD_OR_LOGIN);
    }

    return right(user);
}
