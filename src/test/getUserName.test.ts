import { getUsername } from "../lib/getUserName";
import { User } from "../interface/User";

describe("getUsername", () => {
  it("should return the username when a valid user object is provided", () => {
    const user: User = { name: "testUser" };
    const result = getUsername(user);
    expect(result).toBe("testUser");
  });

  it("should throw an error when the user object does not have a name property", () => {
    const user = {} as User;
    expect(() => getUsername(user)).toThrow("Invalid user object");
  });

  it("should throw an error when the name property is not a string", () => {
    const user = { name: 123 } as unknown as User;
    expect(() => getUsername(user)).toThrow("Invalid user object");
  });
});
