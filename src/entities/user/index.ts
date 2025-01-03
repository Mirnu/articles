import { User } from "./domain";

type UserClient = Omit<User, "salt" | "passwordHash">;

export type { UserClient as User };
