import { userRepository } from "../repositories";
import { sessionService } from "./session";

export const getCurrentUser = async (
    getCookies?: () => Promise<string | undefined>
) => {
    const { session } = await sessionService.verifySession({ getCookies });

    if (session.type === "left") {
        return session;
    }

    return userRepository.getUser({ id: session.value.id });
};
