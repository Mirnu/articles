import { UserEntity } from "./domain";

type UserClient = Omit<UserEntity, "salt" | "passwordHash">;

export type { UserClient as User };
