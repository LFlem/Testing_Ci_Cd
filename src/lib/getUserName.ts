import { User } from "../interface/User";

export const getUsername = (user: User): string => {
  return user.name;
};
