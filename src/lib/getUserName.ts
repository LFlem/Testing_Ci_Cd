import { User } from "../interface/User";

export const getUsername = (user: User): string => {
  if (!user || typeof user.name !== "string") {
    throw new Error("Invalid user object");
  }
  return user.name;
};
